// 질문 데이터
const questions = [
    "끝없는 이자와 독촉, 지치지 않으셨나요?",
    "내 상황에서도 빚을 줄일 수 있을지, 궁금하지 않으세요?",
    "우리와 함께 빚 걱정 없는 내일을 만들어가실래요?"
];

        // 결과 메시지
const resultMessages = {
    yes: "빚 걱정으로 힘든 시간을\n보내고 계시는군요.\n\n하지만 걱정하지 마세요!\n\n전문적인 상담과 체계적인 해결 방안을 통해\n새로운 시작을 도와드릴 수 있습니다.\n지금 바로 상담을 받아보세요.",
    no: "지금은 상황이 괜찮을 수 있지만,\n빚은 시간이 지날수록 이자와 추심으로 더 커질 수 있습니다.\n현생이 함께 방법을 찾아드리겠습니다."
};

let currentQuestionIndex = 0;
let answers = [];

// DOM 요소들
const questionText = document.getElementById('questionText');
const questionCard = document.getElementById('questionCard');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const progress = document.getElementById('progress');
const questionCounter = document.getElementById('questionCounter');

// 초기화
function init() {
    currentQuestionIndex = 0;
    answers = [];
    updateQuestion();
    questionCard.classList.remove('hidden');
    resultCard.classList.add('hidden');
    document.getElementById('serviceSelection').classList.add('hidden');
    // 프로그레스바 초기 설정
    progress.style.width = '33.33%';
    // 카운터 초기 설정
    questionCounter.textContent = '1 / 3';
}

// 질문 업데이트
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        
        // 타이핑 효과
        questionText.textContent = '';
        questionText.classList.add('typing');
        
        setTimeout(() => {
            questionText.textContent = question;
            questionText.classList.remove('typing');
        }, 100);
        
        // 진행률 업데이트
        const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        progress.style.width = progressPercent + '%';
        
        // 카운터 업데이트
        questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    }
}

// 답변 처리
function handleAnswer(answer) {
    answers.push(answer);
    
    // 버튼 애니메이션 효과
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = '';
    }, 150);

    // No 답변인 경우 바로 공감 메시지와 서비스 선택으로 이동
    if (!answer) {
        setTimeout(() => {
            showNoResult();
        }, 300);
        return;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        // 다음 질문으로
        setTimeout(() => {
            updateQuestion();
        }, 300);
    } else {
        // 결과 표시
        setTimeout(() => {
            showResult();
        }, 300);
    }
}

// No 응답시 결과 표시
function showNoResult() {
    questionCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    resultText.textContent = resultMessages.no;
    resultCard.classList.add('fade-in');
}

// 최종 결과 표시
function showResult() {
    questionCard.classList.add('hidden');
    
    // Yes로 답한 경우 서비스 선택 페이지 표시
    const serviceSelection = document.getElementById('serviceSelection');
    serviceSelection.classList.remove('hidden');
    serviceSelection.classList.add('fade-in');
}

// 다시 시작
function restartQuiz() {
    // 모든 카드 숨기기
    questionCard.classList.add('hidden');
    resultCard.classList.add('hidden');
    const serviceSelection = document.getElementById('serviceSelection');
    serviceSelection.classList.add('hidden');
    
    // 퀴즈 초기화
    init();
}

// 서비스 선택
function selectService(serviceType) {
    if (serviceType === 'debtRelief') {
        alert('나의 탕감액 진단 서비스로 이동합니다!');
        // 여기에 실제 탕감액 진단 페이지로 이동하는 로직 추가
    } else if (serviceType === 'expertConsultation') {
        alert('전문가 상담 서비스로 이동합니다!');
        // 여기에 실제 전문가 상담 페이지로 이동하는 로직 추가
    }
}

// 서비스 선택 화면 표시
function showServiceSelection() {
    if (!questionCard.classList.contains('hidden')) {
        questionCard.classList.add('hidden');
    }
    if (!resultCard.classList.contains('hidden')) {
        resultCard.classList.add('hidden');
    }
    const serviceSelection = document.getElementById('serviceSelection');
    serviceSelection.classList.remove('hidden');
    serviceSelection.classList.add('fade-in');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    // 키보드 이벤트 추가
    document.addEventListener('keydown', function(event) {
        if (!resultCard.classList.contains('hidden')) return;
        
        if (event.key === 'y' || event.key === 'Y' || event.key === 'Enter') {
            handleAnswer(true);
        } else if (event.key === 'n' || event.key === 'N') {
            handleAnswer(false);
        }
    });
});

// 버튼 호버 효과 강화
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// 로고 클릭 처리
function handleLogoClick() {
    // 서비스 선택 화면에서는 현답 URL로 이동
    if (!document.getElementById('serviceSelection').classList.contains('hidden')) {
        window.location.href = 'https://hyundap.com/';
    } else {
        // 그 외의 화면에서는 서비스 선택 화면으로 이동
        showServiceSelection();
    }
}

// 페이지 가시성 변경 시 애니메이션 재시작
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && currentQuestionIndex < questions.length) {
        questionCard.classList.add('fade-in');
    }
});
