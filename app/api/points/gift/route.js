import { NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { verifyToken } from '@/lib/auth';

export async function POST(request) {
  const empId = await verifyToken(request);
  if (!empId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { to, points } = await request.json();
  const receiverKey = `user:${to}`;

  // 관리자(20220055)는 포인트 차감 없이 지급 가능
  if (empId === '20220055') {
    if (points > 5000) {
      return NextResponse.json({ error: '최대 5000포인트까지 지급 가능합니다.' }, { status: 400 });
    }
    const addedCarbon = parseFloat((points * 0.02).toFixed(3));
    
    // 현재 데이터 가져오기
    const user = await redis.hgetall(receiverKey);
    const currentPoints = parseInt(user.points || 0);
    const currentCarbon = parseFloat(user.carbonSaved || 0);
    
    const nrPoints = currentPoints + points;
    const nrCarbon = parseFloat((currentCarbon + addedCarbon).toFixed(3));
    
    await redis.hset(receiverKey, {
      points: nrPoints,
      carbonSaved: nrCarbon
    });
    
    await redis.zadd('rankings', nrPoints, to);
    await redis.incrbyfloat('stats:totalCarbon', addedCarbon);
    
    return NextResponse.json({ success: true, points: nrPoints, carbonSaved: nrCarbon });
  }

  // 일반 사용자는 자신의 포인트에서 차감하여 선물
  const senderKey = `user:${empId}`;
  const sUser = await redis.hgetall(senderKey);
  const sPoints = parseInt(sUser.points || 0);

  if (sPoints >= points) {
    const addedCarbon = parseFloat((points * 0.02).toFixed(3));
    
    // 발신자 처리
    const nsPoints = sPoints - points;
    await redis.hset(senderKey, 'points', nsPoints);
    await redis.zadd('rankings', nsPoints, empId);

    // 수신자 처리
    const rUser = await redis.hgetall(receiverKey);
    const rPoints = parseInt(rUser.points || 0);
    const rCarbon = parseFloat(rUser.carbonSaved || 0);
    
    const nrPoints = rPoints + points;
    const nrCarbon = parseFloat((rCarbon + addedCarbon).toFixed(3));
    
    await redis.hset(receiverKey, {
      points: nrPoints,
      carbonSaved: nrCarbon
    });
    await redis.zadd('rankings', nrPoints, to);
    
    // 전체 통계 업데이트
    await redis.incrbyfloat('stats:totalCarbon', addedCarbon);
    
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: '포인트 부족' }, { status: 400 });
}
