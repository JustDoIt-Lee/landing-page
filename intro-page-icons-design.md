# 시작하기 페이지 아이콘 디자인 스펙

## 📐 아이콘 목록

### 1. Analytics 아이콘 (메인 아이콘)
**위치**: `.intro-circle` 내부  
**용도**: 진단/분석을 나타내는 메인 아이콘

#### 디자인 스펙
- **크기**: 
  - 데스크톱: 40px × 40px
  - 태블릿 (768px 이하): 32px × 32px
  - 모바일 (480px 이하): 28px × 28px
- **색상**: White (`#ffffff`)
- **배경**: 회전된 사각형 (45도) 안에 위치
- **아이콘 회전**: -45도 (원래 방향으로 보정)

#### SVG 경로 데이터
```svg
<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" 
          fill="#ffffff"/>
</svg>
```

#### 피그마 스펙
- **ViewBox**: 24 × 24
- **Path**: 차트 막대 3개 (높이가 다른 막대 그래프)
- **Fill Color**: `#FFFFFF`
- **Stroke**: None

---

### 2. Check Circle 아이콘 (기능 목록 아이콘)
**위치**: `.feature-item` 내부  
**용도**: 기능 목록 각 항목의 체크 표시  
**개수**: 3개 (모두 동일한 아이콘)

#### 디자인 스펙
- **크기**: 
  - 데스크톱: 20px × 20px
  - 모바일 (480px 이하): 18px × 18px
- **색상**: Blue (`#3b82f6`)
- **스타일**: 원 안에 체크 표시

#### SVG 경로 데이터
```svg
<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" 
          fill="#3b82f6"/>
</svg>
```

#### 간단한 버전 (Stroke 스타일)
```svg
<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" 
            stroke="#3b82f6" stroke-width="2" fill="none"/>
    <path d="M8 12L11 15L16 9" 
          stroke="#3b82f6" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>
```

#### 피그마 스펙
- **ViewBox**: 24 × 24
- **원**: 
  - Center: (12, 12)
  - Radius: 10
  - Stroke: `#3b82f6`, Width: 2px
- **체크 표시**: 
  - Path: `M8 12L11 15L16 9`
  - Stroke: `#3b82f6`, Width: 2px
  - Line Cap: Round
  - Line Join: Round

---

### 3. Play Arrow 아이콘 (시작하기 버튼)
**위치**: `.intro-start-btn` 내부  
**용도**: 시작하기 버튼의 재생 아이콘

#### 디자인 스펙
- **크기**: 24px × 24px (고정)
- **색상**: White (`#ffffff`)
- **스타일**: 오른쪽을 가리키는 삼각형 (재생 버튼)

#### SVG 경로 데이터
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 5V19L19 12L8 5Z" fill="#ffffff"/>
</svg>
```

#### 둥근 버전 (재생 버튼 스타일)
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#ffffff" opacity="0.2"/>
    <path d="M10 8L16 12L10 16V8Z" fill="#ffffff"/>
</svg>
```

#### 피그마 스펙
- **ViewBox**: 24 × 24
- **삼각형**: 
  - Points: (8, 5) → (19, 12) → (8, 19)
  - Fill: `#FFFFFF`
- **또는 둥근 배경 + 삼각형**:
  - Circle: Center (12, 12), Radius 10, Fill `#FFFFFF` opacity 20%
  - Triangle: Path `M10 8L16 12L10 16V8Z`, Fill `#FFFFFF`

---

## 🎨 색상 팔레트

### Analytics 아이콘
- **아이콘 색상**: `#ffffff` (White)
- **배경**: 그라디언트 `#3b82f6` → `#1d4ed8`

### Check Circle 아이콘
- **아이콘 색상**: `#3b82f6` (Blue 500)
- **배경**: `#f8fafc` (기능 아이템 배경)

### Play Arrow 아이콘
- **아이콘 색상**: `#ffffff` (White)
- **배경**: 그라디언트 `#3b82f6` → `#2563eb` (버튼 배경)

---

## 📏 크기 정보

### 데스크톱 (> 768px)
- Analytics: 40px × 40px
- Check Circle: 20px × 20px
- Play Arrow: 24px × 24px

### 태블릿 (≤ 768px)
- Analytics: 32px × 32px
- Check Circle: 20px × 20px (변경 없음)
- Play Arrow: 24px × 24px (변경 없음)

### 모바일 (≤ 480px)
- Analytics: 28px × 28px
- Check Circle: 18px × 18px
- Play Arrow: 24px × 24px (변경 없음)

---

## 🔄 변환 정보

### Analytics 아이콘
- **컨테이너 회전**: 45도 (`.intro-circle`)
- **아이콘 역회전**: -45도 (아이콘 자체)
- **결과**: 아이콘이 정상 방향으로 보임

### Check Circle 아이콘
- **회전 없음**: 정상 방향
- **정렬**: 중앙 정렬

### Play Arrow 아이콘
- **회전 없음**: 정상 방향
- **정렬**: 버튼 내부 중앙

---

## 💡 피그마 사용 팁

1. **컴포넌트화**: 각 아이콘을 컴포넌트로 만들어 재사용
2. **Variants**: 크기별 Variants 생성
   - Analytics: 40px / 32px / 28px
   - Check Circle: 20px / 18px
   - Play Arrow: 24px (고정)
3. **색상 스타일**: 색상을 스타일로 정의하여 쉽게 변경 가능하게
4. **Auto Layout**: 아이콘과 텍스트를 함께 사용할 때 Auto Layout 활용
5. **Export 설정**: SVG 형식으로 Export 설정 (벡터 유지)

---

## 📋 체크리스트

### Analytics 아이콘
- [ ] 24 × 24 ViewBox 설정
- [ ] 차트 막대 3개 Path 그리기
- [ ] Fill 색상 `#FFFFFF` 설정
- [ ] 크기 Variants 생성 (40px / 32px / 28px)
- [ ] 회전 변환 확인 (컨테이너는 45도, 아이콘은 -45도)

### Check Circle 아이콘
- [ ] 24 × 24 ViewBox 설정
- [ ] 원 그리기 (Radius 10, Center 12,12)
- [ ] 체크 표시 Path 그리기
- [ ] Fill 색상 `#3b82f6` 설정
- [ ] 크기 Variants 생성 (20px / 18px)

### Play Arrow 아이콘
- [ ] 24 × 24 ViewBox 설정
- [ ] 삼각형 Path 그리기
- [ ] Fill 색상 `#FFFFFF` 설정
- [ ] 크기 24px 고정


