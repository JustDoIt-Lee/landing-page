# 시작하기 페이지 디자인 스펙 (피그마용)

## 📐 레이아웃

### 전체 컨테이너 (배경)
- **Width**: 100%
- **Height**: 100%
- **Background**: Linear Gradient (180deg)
  - 시작 색상: `#E8F0FF`
  - 끝 색상: `#FDFEFF`
- **Display**: Flex
- **Align Items**: Center
- **Justify Content**: Center

### 메인 카드 (intro-content)
- **Width**: 최대 600px (데스크톱), 90% (모바일)
- **Padding**: 
  - 데스크톱: 50px 40px (상하 50px, 좌우 40px)
  - 모바일(768px 이하): 30px 20px
  - 모바일(480px 이하): 25px 20px
- **Margin**: 
  - 데스크톱: 0
  - 모바일(768px 이하): 20px
  - 모바일(480px 이하): 15px
- **Background**: `rgba(255, 255, 255, 0.98)`
- **Border**: 
  - Width: 1px
  - Style: Solid
  - Color: `rgba(226, 232, 240, 0.8)` (#E2E8F0 with 80% opacity)
- **Border Radius**: 24px (데스크톱), 20px (480px 이하)
- **Box Shadow**:
  - Shadow 1: `0px 10px 25px rgba(0, 0, 0, 0.08)`
  - Shadow 2: `0px 4px 6px rgba(0, 0, 0, 0.05)`
  - Inset Shadow: `inset 0px 1px 0px rgba(255, 255, 255, 0.9)`
- **Text Align**: Center

---

## 🎨 색상 팔레트

### 텍스트 색상
- **제목 (intro-title)**: `#1e293b` (Slate 800)
- **설명 (intro-description)**: `#64748b` (Slate 500)
- **기능 목록 텍스트**: `#475569` (Slate 600)

### 배경 색상
- **전체 배경**: Linear Gradient `#E8F0FF` → `#FDFEFF`
- **카드 배경**: `rgba(255, 255, 255, 0.98)`
- **기능 목록 아이템**: `#f8fafc` (Slate 50)
- **기능 목록 보더**: `#e2e8f0` (Slate 200)

### 버튼 색상
- **버튼 배경**: Linear Gradient (135deg)
  - 시작: `#3b82f6` (Blue 500)
  - 끝: `#2563eb` (Blue 600)
- **버튼 Hover 배경**: Linear Gradient (135deg)
  - 시작: `#2563eb` (Blue 600)
  - 끝: `#1d4ed8` (Blue 700)
- **버튼 텍스트**: `#ffffff` (White)

### 아이콘 색상
- **아이콘 원 배경**: Linear Gradient (135deg)
  - 시작: `#3b82f6` (Blue 500)
  - 끝: `#1d4ed8` (Blue 700)
- **아이콘 자체**: `#ffffff` (White)
- **기능 목록 아이콘**: `#3b82f6` (Blue 500)

---

## ✍️ 타이포그래피

### 제목 (intro-title)
- **Font Size**: 
  - 데스크톱: 32px
  - 모바일(768px 이하): 24px
  - 모바일(480px 이하): 20px
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.3
- **Color**: `#1e293b`
- **Text Shadow**: `0px 2px 4px rgba(0, 0, 0, 0.08)`
- **Margin Bottom**: 20px (데스크톱), 15px (480px 이하)

### 설명 (intro-description)
- **Font Size**: 
  - 데스크톱: 18px
  - 모바일(768px 이하): 16px
  - 모바일(480px 이하): 14px
- **Line Height**: 1.6
- **Color**: `#64748b`
- **Margin Bottom**: 40px (데스크톱), 30px (480px 이하)

### 기능 목록 (feature-item)
- **Font Size**: 
  - 데스크톱: 16px
  - 모바일(768px 이하): 14px
  - 모바일(480px 이하): 13px
- **Font Weight**: 500 (Medium)
- **Color**: `#475569`

### 버튼 (intro-start-btn)
- **Font Size**: 
  - 데스크톱: 18px
  - 모바일(768px 이하): 16px
  - 모바일(480px 이하): 15px
- **Font Weight**: 600 (Semi Bold)
- **Color**: `#ffffff`

---

## 🎯 컴포넌트 스펙

### 아이콘 원 (intro-circle)
- **Width**: 
  - 데스크톱: 80px
  - 모바일(768px 이하): 64px
  - 모바일(480px 이하): 56px
- **Height**: 
  - 데스크톱: 80px
  - 모바일(768px 이하): 64px
  - 모바일(480px 이하): 56px
- **Background**: Linear Gradient (135deg) `#3b82f6` → `#1d4ed8`
- **Border Radius**: 20px
- **Transform**: Rotate(45deg)
- **Box Shadow**:
  - Shadow 1: `0px 8px 20px rgba(59, 130, 246, 0.2)`
  - Shadow 2: `0px 4px 8px rgba(59, 130, 246, 0.1)`
- **Margin Bottom**: 30px (데스크톱), 20px (480px 이하)
- **아이콘 내부 (Material Icons)**:
  - Font Size: 
    - 데스크톱: 40px
    - 모바일(768px 이하): 32px
    - 모바일(480px 이하): 28px
  - Transform: Rotate(-45deg)
  - Color: White

### 기능 목록 (intro-features)
- **Display**: Flex Column
- **Gap**: 
  - 데스크톱: 15px
  - 모바일(768px 이하): 12px
  - 모바일(480px 이하): 10px
- **Margin Bottom**: 40px (데스크톱), 30px (480px 이하)

### 기능 아이템 (feature-item)
- **Display**: Flex
- **Align Items**: Center
- **Justify Content**: Center
- **Gap**: 12px (아이콘과 텍스트 사이)
- **Padding**: 
  - 데스크톱: 12px 20px
  - 모바일(768px 이하): 10px 16px
  - 모바일(480px 이하): 8px 14px
- **Background**: `#f8fafc`
- **Border**: 
  - Width: 1px
  - Style: Solid
  - Color: `#e2e8f0`
- **Border Radius**: 12px
- **아이콘 (Material Icons)**:
  - Font Size: 
    - 데스크톱: 20px
    - 모바일(480px 이하): 18px
  - Color: `#3b82f6`

### 시작하기 버튼 (intro-start-btn)
- **Display**: Flex
- **Align Items**: Center
- **Justify Content**: Center
- **Gap**: 10px (아이콘과 텍스트 사이)
- **Padding**: 
  - 데스크톱: 18px 40px
  - 모바일(768px 이하): 16px 32px
  - 모바일(480px 이하): 14px 28px
- **Min Width**: 200px (데스크톱)
- **Max Width**: 280px (모바일 768px 이하), 100% (모바일 480px 이하)
- **Border**: None
- **Border Radius**: 14px
- **Box Shadow**: `0px 4px 12px rgba(59, 130, 246, 0.3)`
- **버튼 Hover**:
  - Transform: TranslateY(-2px)
  - Box Shadow: `0px 8px 20px rgba(59, 130, 246, 0.4)`
- **버튼 내부 아이콘 (Material Icons)**:
  - Font Size: 24px

---

## 📏 간격 (Spacing)

### 아이콘 영역 (intro-icon)
- **Margin Bottom**: 30px (데스크톱), 20px (480px 이하)

### 전체 간격 구조
```
[상단 여백]
[아이콘] - margin-bottom: 30px
[제목] - margin-bottom: 20px
[설명] - margin-bottom: 40px
[기능 목록] - gap: 15px, margin-bottom: 40px
[버튼]
[하단 여백]
```

---

## 🌈 그라디언트 스펙

### 배경 그라디언트
- **Type**: Linear
- **Angle**: 180deg (위에서 아래로)
- **Stops**:
  - 0%: `#E8F0FF`
  - 100%: `#FDFEFF`

### 아이콘 원 그라디언트
- **Type**: Linear
- **Angle**: 135deg (대각선)
- **Stops**:
  - 0%: `#3b82f6`
  - 100%: `#1d4ed8`

### 버튼 그라디언트
- **Type**: Linear
- **Angle**: 135deg (대각선)
- **Stops**:
  - Default: `#3b82f6` → `#2563eb`
  - Hover: `#2563eb` → `#1d4ed8`

---

## 🎭 효과 (Effects)

### 카드 쉬머 효과
- **Background**: Linear Gradient (90deg)
  - transparent → `rgba(99, 102, 241, 0.05)` → transparent
- **Animation**: 8초 무한 반복

### 아이콘 펄스 효과
- **Animation**: Scale(1) → Scale(1.05) → Scale(1)
- **Duration**: 2초
- **Timing**: Infinite

---

## 📱 반응형 브레이크포인트

### 데스크톱 (기본)
- **Width**: > 768px
- 모든 기본 값 사용

### 태블릿 (768px 이하)
- 카드 패딩: 30px 20px
- 카드 최대 너비: 90%
- 카드 마진: 20px
- 제목: 24px
- 설명: 16px
- 아이콘 원: 64px
- 기능 목록 간격: 12px
- 기능 아이템: 14px, 10px 16px
- 버튼: 16px, 16px 32px, 최대 너비 280px

### 모바일 (480px 이하)
- 카드 패딩: 25px 20px
- 카드 마진: 15px
- 카드 보더 라디우스: 20px
- 제목: 20px, margin-bottom: 15px
- 설명: 14px, margin-bottom: 30px
- 아이콘 영역: margin-bottom: 20px
- 아이콘 원: 56px
- 아이콘 아이콘: 28px
- 기능 목록 간격: 10px, margin-bottom: 30px
- 기능 아이템: 13px, 8px 14px
- 기능 아이콘: 18px
- 버튼: 15px, 14px 28px, 너비 100%

---

## 📋 체크리스트

### 피그마에서 적용할 항목
- [ ] 전체 배경 그라디언트 설정
- [ ] 카드 스타일 (배경, 보더, 그림자, 라디우스)
- [ ] 아이콘 원 (회전된 사각형, 그라디언트, 그림자)
- [ ] 텍스트 스타일 (제목, 설명, 기능 목록)
- [ ] 기능 목록 아이템 카드 스타일
- [ ] 버튼 스타일 (그라디언트, 그림자, 호버 상태)
- [ ] 반응형 레이아웃 (자동 레이아웃)
- [ ] 간격 및 패딩 값
- [ ] 색상 팔레트 설정
- [ ] 폰트 스타일 설정

---

## 🎨 피그마 컴포넌트 구조 제안

```
Frame: 시작하기 페이지
├── Background (Rectangle)
│   └── Fill: Linear Gradient #E8F0FF → #FDFEFF
│
└── Card: intro-content (Auto Layout, Vertical, Center, Padding 50px 40px)
    ├── Icon Container (Frame)
    │   └── Icon Circle (Rectangle 80x80, Rotate 45deg)
    │       ├── Fill: Linear Gradient #3b82f6 → #1d4ed8
    │       └── Icon (analytics, Rotate -45deg, White)
    │
    ├── Title (Text, 32px, Bold, #1e293b)
    │
    ├── Description (Text, 18px, #64748b)
    │
    ├── Features (Auto Layout, Vertical, Gap 15px)
    │   ├── Feature 1 (Auto Layout, Horizontal, Center, Padding 12px 20px)
    │   │   ├── Icon (check_circle, #3b82f6)
    │   │   └── Text (16px, Medium, #475569)
    │   ├── Feature 2 (동일)
    │   └── Feature 3 (동일)
    │
    └── Start Button (Auto Layout, Horizontal, Center, Padding 18px 40px)
        ├── Icon (play_arrow, White)
        └── Text (18px, Semi Bold, White)
```

---

## 💡 참고사항

1. **자동 레이아웃 (Auto Layout)** 사용 권장
2. **컬러 스타일** 미리 정의하여 재사용
3. **텍스트 스타일** 미리 정의하여 재사용
4. **컴포넌트**로 만들어 재사용 가능하게
5. **Variants** 사용하여 반응형 스타일 관리
6. **Shadows** 스타일 미리 정의
7. **Gradients** 스타일 미리 정의


