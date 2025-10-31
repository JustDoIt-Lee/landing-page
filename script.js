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
    
    if (successStories) successStories.style.display = 'none';
    if (stayEffects) stayEffects.style.display = 'none';
    if (progressFlow) progressFlow.style.display = 'none';
    if (expertsSection) expertsSection.style.display = 'none';
    
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
    const consultationFormModal = document.getElementById('consultationFormModal');
    
    if (event.target === phoneModal) {
        closePhoneModal();
    }
    if (event.target === selfDiagnosisModal) {
        closeSelfDiagnosisModal();
    }
    if (event.target === consultationFormModal) {
        closeConsultationForm();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePhoneModal();
        closeSelfDiagnosisModal();
        closeConsultationForm();
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
    closeSelfDiagnosisModal();
    showConsultationForm();
}

// 상담신청 폼 모달 표시
function showConsultationForm() {
    const modal = document.getElementById('consultationFormModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 상담신청 폼 모달 닫기
function closeConsultationForm() {
    const modal = document.getElementById('consultationFormModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    // 폼 초기화
    const form = document.getElementById('consultationForm');
    if (form) {
        form.reset();
    }
}

// 상담신청 폼 제출 처리
function handleConsultationFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // 필수 필드 검증
    if (!data.name || !data.phone || !data.privacy) {
        alert('필수 항목을 모두 입력해주세요.');
        return;
    }
    
    // 전화번호 형식 검증
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(data.phone)) {
        alert('올바른 전화번호 형식으로 입력해주세요. (예: 010-1234-5678)');
        return;
    }
    
    // 이메일 형식 검증 (이메일이 입력된 경우)
    if (data.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('올바른 이메일 형식으로 입력해주세요.');
            return;
        }
    }
    
    // 폼 데이터를 서버로 전송하는 로직 (실제 구현 시)
    console.log('상담신청 데이터:', data);
    
    // 성공 메시지 표시
    alert('상담신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    
    // 모달 닫기
    closeConsultationForm();
    
    // 외부 링크로 이동 (실제 상담 페이지)
    window.open('https://hyundap.com/work5', '_blank');
}

// 페이지 가시성 변경 시 애니메이션 재시작
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && currentQuestionIndex < questions.length) {
        questionCard.classList.add('fade-in');
    }
});

// ===========================
// 셀프진단 페이지 관련 함수들
// ===========================

let selfCheckData = {};
let currentStep = 1;
const totalSteps = 6;

// 셀프진단 페이지 표시
function showSelfCheckPage() {
    document.getElementById('selfCheckPage').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // 인트로 화면 표시
    document.getElementById('selfCheckIntro').style.display = 'flex';
    document.getElementById('selfCheckContainer').style.display = 'none';
}

// 진단 시작하기
function startSelfCheck() {
    // 인트로 화면 숨기기
    document.getElementById('selfCheckIntro').style.display = 'none';
    document.getElementById('selfCheckContainer').style.display = 'flex';
    
    // 셀프진단 초기화
    initSelfCheck();
}

// 메인 페이지로 돌아가기
function goBackToMain() {
    document.getElementById('selfCheckPage').classList.add('hidden');
    document.body.style.overflow = 'auto';
    resetSelfCheck();
}

// 셀프진단 초기화
function initSelfCheck() {
    currentStep = 1;
    selfCheckData = {};
    updateSelfCheckProgress();
    showStep(1);
    setupOptionButtons();
    setupConditionalFields();
}

// 셀프진단 리셋
function resetSelfCheck() {
    currentStep = 1;
    selfCheckData = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelectorAll('.zipcode-input, .workplace-input').forEach(input => {
        input.value = '';
    });
}

// 단계 표시
function showStep(step) {
    document.querySelectorAll('.check-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');
    updateNavigationButtons();
}

// 진행률 업데이트
function updateSelfCheckProgress() {
    const progress = document.getElementById('selfCheckProgress');
    const progressText = document.getElementById('selfCheckProgressText');
    const percentage = (currentStep / totalSteps) * 100;
    
    progress.style.width = `${percentage}%`;
    progressText.textContent = `${currentStep}단계 / ${totalSteps}단계`;
}

// 네비게이션 버튼 업데이트
function updateNavigationButtons() {
    const backArrowBtn = document.getElementById('backArrowBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 뒤로가기 버튼
    if (currentStep === 1) {
        if (backArrowBtn) backArrowBtn.style.display = 'none';
    } else {
        if (backArrowBtn) backArrowBtn.style.display = 'flex';
    }
    
    // 다음 버튼
    if (currentStep === totalSteps) {
        if (nextBtn) nextBtn.textContent = '진단 완료';
    } else {
        if (nextBtn) nextBtn.textContent = '다음 단계로';
    }
}

// 옵션 버튼 설정
function setupOptionButtons() {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const questionItem = this.closest('.question-item');
            const questionLabel = questionItem.querySelector('.question-label').textContent;
            const isMultiple = this.closest('.option-buttons').classList.contains('multiple');
            
            if (isMultiple) {
                // 다중 선택
                this.classList.toggle('selected');
                updateMultipleSelection(questionLabel, this.dataset.value);
            } else {
                // 단일 선택
                questionItem.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                selfCheckData[questionLabel] = this.dataset.value;
            }
            
            // 조건부 필드 표시
            handleConditionalFields(questionLabel, this.dataset.value);
            
            // 오류 상태 제거
            questionItem.classList.remove('error');
        });
    });
}

// 다중 선택 업데이트
function updateMultipleSelection(questionLabel, value) {
    if (!selfCheckData[questionLabel]) {
        selfCheckData[questionLabel] = [];
    }
    
    const selectedValues = selfCheckData[questionLabel];
    const index = selectedValues.indexOf(value);
    
    if (index > -1) {
        selectedValues.splice(index, 1);
    } else {
        selectedValues.push(value);
    }
    
    if (selectedValues.length === 0) {
        delete selfCheckData[questionLabel];
    }
}

// 조건부 필드 처리
function setupConditionalFields() {
    // 텍스트 입력 필드에 오류 상태 제거 기능 추가
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.addEventListener('input', function() {
            const questionItem = this.closest('.question-item');
            if (questionItem && this.value.trim()) {
                questionItem.classList.remove('error');
            }
        });
    });
    
    // 거주 형태에 따른 보증금/월세 금액 필드
    const residenceButtons = document.querySelectorAll('#step3 .option-btn[data-value="rent"]');
    residenceButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const rentAmountItem = document.getElementById('rentAmountItem');
            if (this.classList.contains('selected')) {
                rentAmountItem.style.display = 'block';
            } else {
                rentAmountItem.style.display = 'none';
                rentAmountItem.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            }
        });
    });
    
    // 직장 유무에 따른 직장 주소 필드
    const workplaceButtons = document.querySelectorAll('#step3 .option-btn[data-value="yes"]');
    workplaceButtons.forEach(btn => {
        if (btn.closest('.question-item').querySelector('.question-label').textContent === '직장 유무') {
            btn.addEventListener('click', function() {
                const workplaceItem = document.getElementById('workplaceItem');
                if (this.classList.contains('selected')) {
                    workplaceItem.style.display = 'block';
                } else {
                    workplaceItem.style.display = 'none';
                    workplaceItem.querySelector('.workplace-input').value = '';
                }
            });
        }
    });
    
    // 담보부 채무 여부에 따른 담보부 채무 원금 필드
    const securedDebtButtons = document.querySelectorAll('#step6 .option-btn[data-value="yes"]');
    securedDebtButtons.forEach(btn => {
        if (btn.closest('.question-item').querySelector('.question-label').textContent === '담보부 채무 여부') {
            btn.addEventListener('click', function() {
                const securedDebtItem = document.getElementById('securedDebtItem');
                if (this.classList.contains('selected')) {
                    securedDebtItem.style.display = 'block';
                } else {
                    securedDebtItem.style.display = 'none';
                    securedDebtItem.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                }
            });
        }
    });
}

// 조건부 필드 처리
function handleConditionalFields(questionLabel, value) {
    if (questionLabel === '현재 거주 형태' && value === 'rent') {
        document.getElementById('rentAmountItem').style.display = 'block';
    } else if (questionLabel === '현재 거주 형태' && value !== 'rent') {
        document.getElementById('rentAmountItem').style.display = 'none';
    }
    
    if (questionLabel === '직장 유무' && value === 'yes') {
        document.getElementById('workplaceItem').style.display = 'block';
    } else if (questionLabel === '직장 유무' && value !== 'yes') {
        document.getElementById('workplaceItem').style.display = 'none';
    }
    
    if (questionLabel === '담보부 채무 여부' && value === 'yes') {
        document.getElementById('securedDebtItem').style.display = 'block';
    } else if (questionLabel === '담보부 채무 여부' && value !== 'yes') {
        document.getElementById('securedDebtItem').style.display = 'none';
    }
}

// 다음 단계
function nextStep() {
    if (currentStep < totalSteps) {
        // 현재 단계의 필수 입력 검증
        if (!validateCurrentStep()) {
            return;
        }
        
        // 입력 데이터 저장
        saveCurrentStepData();
        
        currentStep++;
        updateSelfCheckProgress();
        showStep(currentStep);
    } else {
        // 진단 완료
        completeSelfCheck();
    }
}

// 이전 단계
function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateSelfCheckProgress();
        showStep(currentStep);
    }
}

// 현재 단계 검증
function validateCurrentStep() {
    const currentStepEl = document.getElementById(`step${currentStep}`);
    const requiredQuestions = currentStepEl.querySelectorAll('.question-item');
    const unAnsweredQuestions = [];
    
    // 모든 오류 상태 초기화
    requiredQuestions.forEach(question => {
        question.classList.remove('error');
    });
    
    for (let question of requiredQuestions) {
        const questionLabel = question.querySelector('.question-label').textContent;
        const optionButtons = question.querySelectorAll('.option-btn.selected');
        const textInputs = question.querySelectorAll('input[type="text"]');
        let isAnswered = false;
        
        // 옵션 버튼이 있는 경우
        if (optionButtons.length > 0) {
            isAnswered = optionButtons.length > 0;
        }
        
        // 텍스트 입력이 있는 경우
        if (textInputs.length > 0) {
            for (let input of textInputs) {
                if (input.style.display !== 'none' && input.value.trim()) {
                    isAnswered = true;
                    break;
                }
            }
        }
        
        // 답변하지 않은 질문 표시
        if (!isAnswered) {
            question.classList.add('error');
            unAnsweredQuestions.push(questionLabel);
        }
    }
    
    // 답변하지 않은 질문이 있으면 알림 표시
    if (unAnsweredQuestions.length > 0) {
        showValidationMessage(unAnsweredQuestions);
        
        // 첫 번째 오류 질문으로 스크롤
        const firstErrorQuestion = currentStepEl.querySelector('.question-item.error');
        if (firstErrorQuestion) {
            firstErrorQuestion.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
        
        return false;
    }
    
    return true;
}

// 검증 메시지 표시
function showValidationMessage(unAnsweredQuestions) {
    const overlay = document.getElementById('validationOverlay');
    const message = document.getElementById('validationMessage');
    
    // 메시지 내용 업데이트
    const messageText = message.querySelector('.message-text');
    const messageDetail = message.querySelector('.message-detail');
    
    if (unAnsweredQuestions.length === 1) {
        messageText.textContent = `"${unAnsweredQuestions[0]}" 질문에 답변해주세요`;
        messageDetail.innerHTML = '해당 질문을 선택해주세요';
    } else {
        messageText.textContent = `${unAnsweredQuestions.length}개의 질문에 답변이 필요합니다`;
        messageDetail.innerHTML = unAnsweredQuestions.map(q => `<div class="question-list-item">• ${q}</div>`).join('');
    }
    
    // 오버레이와 메시지 표시
    overlay.classList.add('show');
    message.classList.add('show');
    
    // 3초 후 자동으로 닫기
    setTimeout(() => {
        closeValidationMessage();
    }, 3000);
}

// 검증 메시지 닫기
function closeValidationMessage() {
    const overlay = document.getElementById('validationOverlay');
    const message = document.getElementById('validationMessage');
    
    overlay.classList.remove('show');
    message.classList.remove('show');
}

// 현재 단계 데이터 저장
function saveCurrentStepData() {
    const currentStepEl = document.getElementById(`step${currentStep}`);
    const questionItems = currentStepEl.querySelectorAll('.question-item');
    
    questionItems.forEach(item => {
        const questionLabel = item.querySelector('.question-label').textContent;
        const selectedButtons = item.querySelectorAll('.option-btn.selected');
        const textInputs = item.querySelectorAll('input[type="text"]');
        
        // 선택된 옵션들 저장
        if (selectedButtons.length > 0) {
            if (selectedButtons.length === 1) {
                selfCheckData[questionLabel] = selectedButtons[0].dataset.value;
            } else {
                selfCheckData[questionLabel] = Array.from(selectedButtons).map(btn => btn.dataset.value);
            }
        }
        
        // 텍스트 입력 저장
        textInputs.forEach(input => {
            if (input.value.trim()) {
                selfCheckData[questionLabel] = input.value.trim();
            }
        });
    });
}

// 셀프진단 완료
function completeSelfCheck() {
    // 마지막 단계 데이터 저장
    saveCurrentStepData();
    
    // 점수 계산
    const score = calculateScore();
    const possibility = getPossibility(score);
    
    // 결과 표시
    showResult(possibility, score);
}

// 점수 계산
function calculateScore() {
    let score = 0;
    
    // 기본 정보 점수
    if (selfCheckData['나이'] === 'under-30') score += 10;
    else if (selfCheckData['나이'] === '30-40') score += 15;
    else if (selfCheckData['나이'] === '40-50') score += 20;
    else if (selfCheckData['나이'] === 'over-50') score += 25;
    
    if (selfCheckData['장애인 여부'] === 'yes') score += 15;
    if (selfCheckData['전세사기 피해자 여부'] === 'yes') score += 10;
    
    // 가족 상황 점수
    if (selfCheckData['부모님 조건']) {
        const parentConditions = Array.isArray(selfCheckData['부모님 조건']) ? 
            selfCheckData['부모님 조건'] : [selfCheckData['부모님 조건']];
        
        if (parentConditions.includes('over-65')) score += 10;
        if (parentConditions.includes('basic-income')) score += 15;
        if (parentConditions.includes('disabled')) score += 10;
    }
    
    if (selfCheckData['5년 내 법원으로부터 면책결정 유무'] === 'yes') score -= 20;
    
    // 수입 및 재산 점수
    if (selfCheckData['월 평균 수입'] === 'under-200') score += 20;
    else if (selfCheckData['월 평균 수입'] === '200-300') score += 15;
    else if (selfCheckData['월 평균 수입'] === '300-400') score += 10;
    else if (selfCheckData['월 평균 수입'] === '400-500') score += 5;
    
    if (selfCheckData['재산의 현재가치'] === 'under-1000') score += 15;
    else if (selfCheckData['재산의 현재가치'] === '1000-3000') score += 10;
    else if (selfCheckData['재산의 현재가치'] === '3000-5000') score += 5;
    
    // 채무 현황 점수
    if (selfCheckData['채권자 수'] === '1-3') score += 10;
    else if (selfCheckData['채권자 수'] === '4-6') score += 5;
    else if (selfCheckData['채권자 수'] === '7-10') score -= 5;
    else if (selfCheckData['채권자 수'] === 'over-10') score -= 15;
    
    if (selfCheckData['1년 내 채무 여부'] === 'yes') score -= 10;
    if (selfCheckData['3개월 내 채무 여부'] === 'yes') score -= 15;
    
    // 채무 상세 점수
    if (selfCheckData['담보부 채무 여부'] === 'yes') score -= 10;
    
    if (selfCheckData['모든 채무의 원금 합계'] === 'under-1000') score += 15;
    else if (selfCheckData['모든 채무의 원금 합계'] === '1000-3000') score += 10;
    else if (selfCheckData['모든 채무의 원금 합계'] === '3000-5000') score += 5;
    else if (selfCheckData['모든 채무의 원금 합계'] === '5000-10000') score -= 5;
    else if (selfCheckData['모든 채무의 원금 합계'] === 'over-10000') score -= 15;
    
    return Math.max(0, Math.min(100, score));
}

// 가능성 판정
function getPossibility(score) {
    if (score >= 70) return { level: '높음', color: '#10b981', description: '개인회생 신청이 유리한 상황입니다.' };
    else if (score >= 40) return { level: '보통', color: '#f59e0b', description: '상담을 통해 구체적인 방안을 검토해보세요.' };
    else return { level: '낮음', color: '#ef4444', description: '다른 채무 해결 방안을 고려해보세요.' };
}

// 결과 표시
function showResult(possibility, score) {
    // 결과 단계로 이동
    document.querySelectorAll('.check-step').forEach(step => step.classList.remove('active'));
    document.getElementById('resultStep').classList.add('active');
    
    // 결과 업데이트
    document.getElementById('possibility').textContent = possibility.level;
    document.getElementById('possibility').style.color = possibility.color;
    
    const resultDetails = document.getElementById('resultDetails');
    resultDetails.innerHTML = `
        <h3>진단 결과 상세</h3>
        <p><strong>회생 가능성:</strong> ${possibility.level} (${score}점)</p>
        <p><strong>권장사항:</strong> ${possibility.description}</p>
        <div style="margin-top: 20px;">
            <h4>다음 단계</h4>
            <ul style="margin-left: 20px;">
                <li>전문가와의 상담을 통해 구체적인 방안 검토</li>
                <li>필요한 서류 준비 및 신청 절차 안내</li>
                <li>개인회생 절차에 대한 상세 설명</li>
            </ul>
        </div>
    `;
    
    // 네비게이션 버튼 숨기기
    document.querySelector('.self-check-navigation').style.display = 'none';
}

// 셀프진단 다시 시작
function restartSelfCheck() {
    resetSelfCheck();
    initSelfCheck();
    document.querySelector('.self-check-navigation').style.display = 'flex';
}
