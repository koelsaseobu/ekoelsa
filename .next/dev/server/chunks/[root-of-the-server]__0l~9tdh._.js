module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/missions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "todayMissions",
    ()=>todayMissions
]);
const todayMissions = [
    {
        id: 'pledge',
        title: '모두의 에너지지킴이 서약',
        points: 50,
        carbon: 1.0,
        type: 'pledge',
        description: '지구를 위한 소중한 약속에 동참해주세요. (약 400mL 원유 절감 효과)'
    },
    {
        id: 'm8',
        title: '폐배터리 수거',
        points: 50,
        carbon: 1.0,
        type: 'qr',
        description: '수거함 이용 시 약 400mL의 원유 수입을 대체합니다.'
    },
    {
        id: 'm9',
        title: '굿윌스토어 물품 기증',
        points: 50,
        carbon: 1.0,
        type: 'qr',
        description: '물품 기증 시 약 400mL의 원유를 아끼고 장애인 일자리를 만듭니다.'
    },
    {
        id: 'm2',
        title: '대중교통 이용',
        points: 25,
        carbon: 0.5,
        type: 'photo',
        description: '출퇴근 편도 이동 시 약 200mL 원유 절감'
    },
    {
        id: 'm3',
        title: '다회용컵 이용',
        points: 15,
        carbon: 0.3,
        type: 'photo',
        description: '종이컵 대신 텀블러 사용 시 약 120mL 원유 절감'
    },
    {
        id: 'm4',
        title: '페이퍼리스',
        points: 30,
        carbon: 0.6,
        type: 'text',
        description: 'A4 용지 3장 절약 시 약 240mL 원유 절감'
    },
    {
        id: 'm5',
        title: '줍깅/플로깅 참여',
        points: 30,
        carbon: 0.6,
        type: 'photo',
        description: '쓰레기 1kg 수거 시 약 240mL 원유 절감'
    },
    {
        id: 'm10',
        title: '메일함 비우기',
        points: 15,
        carbon: 0.3,
        type: 'photo',
        description: '스팸 메일 10통 삭제 시 약 120mL 원유 절감'
    },
    {
        id: 'm12',
        title: '실내 적정온도 유지',
        points: 20,
        carbon: 0.4,
        type: 'photo',
        description: '냉난방 온도 1도 조절 시 일 평균 약 160mL 원유 절감'
    }
];
}),
"[project]/app/api/missions/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.3_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$missions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/missions.js [app-route] (ecmascript)");
;
;
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$missions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["todayMissions"]);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0l~9tdh._.js.map