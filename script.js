// 질문 데이터
const questions = [
    "끝없는 이자와 독촉, 지치지 않으셨나요?",
    "내 상황에 맞는 변제 방법, 궁금하지 않으세요?"
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
    progress.style.width = '50%';
    // 카운터 초기 설정
    questionCounter.textContent = '1 / 2';
    
    // 모바일에서 페이지 로드 시 가로 스크롤 초기화
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        setTimeout(() => {
            const storiesGrid = document.querySelector('.stories-grid');
            if (storiesGrid) {
                storiesGrid.scrollLeft = 0;
                storiesGrid.scrollTo(0, 0);
            }
        }, 200);
    }
}

// 질문 업데이트
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        
        // 배경 이미지 업데이트
        const firstQuestion = document.querySelector('.first-question');
        const secondQuestion = document.querySelector('.second-question');
        
        if (currentQuestionIndex === 0) {
            firstQuestion.style.opacity = '0.7';
            secondQuestion.style.opacity = '0';
        } else {
            firstQuestion.style.opacity = '0';
            secondQuestion.style.opacity = '0.7';
        }
        
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
    showServiceSelection();
}

// 다시 시작
function restartQuiz() {
    // 모든 카드 숨기기
    questionCard.classList.add('hidden');
    resultCard.classList.add('hidden');
    const serviceSelection = document.getElementById('serviceSelection');
    serviceSelection.classList.add('hidden');
    
    // 모바일에서 메인 페이지로 돌아갈 때 서비스 페이지 클래스 제거
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        document.body.classList.remove('service-page');
    }
    
    // 서비스 페이지 섹션들 숨기기
    const successStories = document.getElementById('successStories');
    const stayEffects = document.querySelector('.stay-effects');
    const progressFlow = document.querySelector('.progress-flow');
    const expertsSection = document.querySelector('.experts-section');
    const solutionText = document.querySelector('.solution-text');
    
    if (successStories) successStories.style.display = 'none';
    if (stayEffects) stayEffects.style.display = 'none';
    if (progressFlow) progressFlow.style.display = 'none';
    if (expertsSection) expertsSection.style.display = 'none';
    if (solutionText) solutionText.style.display = 'none';
    
    // CTA 섹션 숨기기
    const finalCtaSection = document.querySelector('.final-cta-section');
    if (finalCtaSection) {
        finalCtaSection.style.display = 'none';
    }
    
    // 퀴즈 초기화
    init();
}

// 서비스 선택
function selectService(serviceType) {
    if (serviceType === 'expertConsultation') {
        alert('전문가 상담 서비스로 이동합니다!');
        // 여기에 실제 전문가 상담 페이지로 이동하는 로직 추가
    } else if (serviceType === 'debtRelief') {
        alert('나의 탕감액 진단 서비스로 이동합니다!');
        // 여기에 실제 탕감액 진단 페이지로 이동하는 로직 추가
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
    
    // 모바일에서만 변화를 만든 사람들 섹션의 가로 스크롤을 맨 왼쪽으로 이동
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        setTimeout(() => {
            const storiesGrid = document.querySelector('.stories-grid');
            if (storiesGrid) {
                storiesGrid.scrollLeft = 0;
                // 강제로 스크롤 위치 초기화
                storiesGrid.scrollTo(0, 0);
            }
        }, 100);
        
        // 추가로 더 늦은 타이밍에도 한 번 더 실행
        setTimeout(() => {
            const storiesGrid = document.querySelector('.stories-grid');
            if (storiesGrid) {
                storiesGrid.scrollLeft = 0;
                storiesGrid.scrollTo(0, 0);
            }
        }, 500);
        
        // 모바일 서비스 페이지 클래스 추가 (필요시 사용)
        document.body.classList.add('service-page');
    }
    
    // 서비스 페이지 섹션들 보이기
    const successStories = document.getElementById('successStories');
    const stayEffects = document.querySelector('.stay-effects');
    const progressFlow = document.querySelector('.progress-flow');
    const expertsSection = document.querySelector('.experts-section');
    const solutionText = document.querySelector('.solution-text');
    
    if (successStories) {
        successStories.style.display = 'block';
        successStories.style.visibility = 'visible';
    }
    if (stayEffects) {
        stayEffects.style.display = 'block';
        stayEffects.style.visibility = 'visible';
    }
    if (progressFlow) {
        progressFlow.style.display = 'flex';
        progressFlow.style.visibility = 'visible';
    }
    if (expertsSection) {
        expertsSection.style.display = 'block';
        expertsSection.style.visibility = 'visible';
    }
    if (solutionText) {
        solutionText.style.display = 'block';
        solutionText.style.visibility = 'visible';
    }
    
    // CTA 섹션 표시
    const finalCtaSection = document.querySelector('.final-cta-section');
    if (finalCtaSection) {
        finalCtaSection.style.display = 'block';
    }
    
    // 배경 이미지들 숨기기
    const firstQuestion = document.querySelector('.first-question');
    const secondQuestion = document.querySelector('.second-question');
    if (firstQuestion) firstQuestion.style.opacity = '0';
    if (secondQuestion) secondQuestion.style.opacity = '0';
    
    // 헤더 전환
    document.querySelector('.main-header').classList.add('hidden');
    document.querySelector('.service-header').classList.remove('hidden');

    // 두 번째 페이지에서는 세로 스크롤만 가능하게
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 복원 방지: 메인 진입 시 항상 상단으로
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    init();
    
    // 첫 번째 페이지(질문 카드)에서는 스크롤 막기
    document.body.style.overflow = 'hidden';

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

// Lazy YouTube loader for success stories
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.video-thumb');
    if (!btn) return;
    const videoId = btn.getAttribute('data-video-id');
    if (!videoId) return;

    const wrapper = btn.parentElement;
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    wrapper.replaceChildren(iframe);
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
    // 서비스 선택 화면이 아닐 때만 클릭 이벤트 처리
    if (document.getElementById('serviceSelection').classList.contains('hidden')) {
        // 왼쪽 이미지 숨기기
        const firstQuestion = document.querySelector('.first-question');
        if (firstQuestion) firstQuestion.style.opacity = '0';
        showServiceSelection();
    }
}

// 전화 버튼 클릭 처리 (모바일/웹 구분)
function handlePhoneClick() {
    const phoneNumber = '02-6929-0514';
    
    // 모바일 디바이스 감지
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768);
    
    if (isMobile) {
        // 모바일에서는 전화 연결
        window.open(`tel:${phoneNumber}`, '_self');
    } else {
        // 웹에서는 모달 표시
        showPhoneModal();
    }
}

// 전화번호 모달 표시
function showPhoneModal() {
    const modal = document.getElementById('phoneModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

// 전화번호 모달 닫기
function closePhoneModal() {
    const modal = document.getElementById('phoneModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // 스크롤 복원
}

// 모달 내 전화 걸기 버튼
function makePhoneCall() {
    const phoneNumber = '02-6929-0514';
    window.open(`tel:${phoneNumber}`, '_self');
    closePhoneModal();
}

// 모달 배경 클릭 시 닫기
document.addEventListener('click', function(event) {
    const phoneModal = document.getElementById('phoneModal');
    const selfDiagnosisModal = document.getElementById('selfDiagnosisModal');
    
    if (event.target === phoneModal) {
        closePhoneModal();
    }
    if (event.target === selfDiagnosisModal) {
        closeSelfDiagnosisModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePhoneModal();
        closeSelfDiagnosisModal();
    }
});

// 셀프 진단 모달 표시
function showSelfDiagnosisModal() {
    const modal = document.getElementById('selfDiagnosisModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 셀프 진단 모달 닫기
function closeSelfDiagnosisModal() {
    const modal = document.getElementById('selfDiagnosisModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// 티타임 상담으로 이동
function goToExpertConsultation() {
    window.open('https://hyundap.com/work5', '_blank');
    closeSelfDiagnosisModal();
}

// 페이지 가시성 변경 시 애니메이션 재시작
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && currentQuestionIndex < questions.length) {
        questionCard.classList.add('fade-in');
    }
});
