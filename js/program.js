/* =========================================
   프로그램 요강 모달 및 카테고리 아코디언 로직
========================================= */
const programData = {
    'mdiv': {
        title: 'M.Div (목회학 석사) - 총 79 학점',
        link: 'https://catalog.biola.edu/tst/mdiv/TPKP/#programrequirementstext',
        categories: [
            {
                catTitle: '성경 언어 필수 (Biblical Languages Requirement)',
                catDesc: '헬라어와 히브리어 두 가지 성경 언어가 필수입니다.<br><strong>[헬라어]</strong> 자격 시험을 통해 TKNT 501/502 면제가 가능합니다. 면제 시 신약 부서 다른 과목으로 학점을 대체합니다.<br><strong>[히브리어]</strong> 자격 시험을 통해 TKOT 603/604 면제가 가능합니다. 면제 시 구약 부서 다른 과목으로 학점을 대체합니다.',
                courses: [
                    { code: 'TKNT 501', name: '기초 헬라어 I', credits: '3 학점', desc: '신약 헬라어의 기본 요소에 대한 입문 연구의 1부입니다. 2학기에는 신약성경 일부를 번역합니다. 헬라어 기초 과정의 전체 시퀀스를 충분히 완성하지 못한 학생들을 위해 설계되었습니다.' },
                    { code: 'TKNT 502', name: '기초 헬라어 II', credits: '3 학점', desc: '신약 헬라어의 기본 요소에 대한 입문 연구의 2부입니다. 2학기에는 신약성경 일부를 번역합니다. 헬라어 기초 과정의 전체 시퀀스를 완성하지 못한 학생들을 위해 설계되었습니다.' },
                    { code: 'TKNT 503', name: '주해 입문 (헬라어)', credits: '3 학점', desc: '형태론 및 구문에 대한 포괄적인 연구, 헬라어 어휘력 향상, 본문 비평 소개, 헬라어 신약성서의 선택된 구절을 읽는 주해 방법. 성경 본문을 이해하기 위한 도구로서 헬라어 연구의 가치를 강조하기 위해 고안되었습니다.' },
                    { code: 'TKNT 604/605', name: '복음서 주해 또는 서신서 주해', credits: '3 학점', desc: '복음서의 헬라어 본문에서 선택한 구절에 대한 주해 연구입니다. 주해적 방법론을 적용하고 각 책의 역사적 배경, 구성, 저자, 특징 등 배경 문제에 대해 논의합니다. 성경 본문 해석을 위한 현대 비평 방법의 평가에 특별한 관심을 기울입니다.' },
                    { code: 'TKOT 603', name: '기초 히브리어 I', credits: '3 학점', desc: '번역 및 작문 연습이 포함된 기본 구약 히브리어 문법을 배웁니다.' },
                    { code: 'TKOT 604', name: '기초 히브리어 II', credits: '3 학점', desc: '선택된 성경 본문의 읽기 및 번역에 중점을 둔 추가 구약 히브리어 문법 및 구문을 배웁니다.' },
                    { code: 'TKOT 703', name: '히브리어 주해 입문', credits: '3 학점', desc: '문법 분석 및 주석 방법 소개(특히 텍스트 비평, 번역, 구문 및 어휘 분석)를 포함한 히브리어 원문 텍스트 읽기(중급 수준)과정입니다.' },
                    { code: 'TKOT 722', name: '히브리어 주해', credits: '2 학점', desc: '히브리어 텍스트 읽기(고급 수준) 및 선택한 텍스트에 대한 포괄적인 해석 방법을 다룹니다.' }
                ]
            },
            {
                catTitle: '선수 과목 (Prerequisite Courses)',
                courses: [
                    { code: 'TKBE 519', name: '구약성경 개관', credits: '선수 학점', desc: '엄선된 입문 및 중요 이슈, 관련 배경, 주요 주제와 분류, 중요한 문제 등 구약성서에 대한 광범위한 탐색입니다. ' },
                    { code: 'TKBE 520', name: '신약성경 개관', credits: '선수 학점', desc: '선별된 입문 및 비평적 이슈, 관련 배경, 주요 주제 및 구분, 결정적 문제를 포함하여 신약성경 책에 대한 일반적인 개요입니다.' }
                ]
            },
            {
                catTitle: '프로그램 필수 과목 (Program Courses)',
                catDesc: '목회 및 일반 사역(Pastoral and General Ministries) 전공 학생은 다음 과목을 이수해야 합니다.',
                courses: [
                    {
                        code: 'TKHT 505/506/514',
                        name: '역사신학 (택 1)',
                        credits: '3 학점',
                        desc: '교부 및 중세 신학(505), 종교개혁과 현대신학(506), 또는 역사신학 연구(514) 가운데 한 과목을 선택합니다. 교회의 역사와 교리의 발전을 살펴보고, 교부 시대, 중세, 종교개혁, 현대에 이르는 주요 신학자와 사상, 그리고 교회의 발전 과정을 학습합니다.'

                    },
                    {
                        code: 'TKPT 591',
                        name: '현장 사역 실습 I',
                        credits: '1 학점',
                        desc: '사역의 실제적인 요소를 소개합니다. 멘토십, 진로 계획, 현장 경험, 그리고 이후 현장 사역 실습을 위한 기초를 준비하는 과정입니다.'

                    },
                    {

                        code: 'TKPT 609',
                        name: '강해 설교',
                        credits: '3 학점',
                        desc: '성경 본문에 충실하면서도 이해하기 쉽고, 현대의 필요에 적절하게 적용되는 강해 설교를 준비하고 작성하는 과정을 학습합니다.'

                    },
                    {

                        code: 'TKPT 707',
                        name: '목회적 돌봄과 상담의 기초',
                        credits: '2 학점',
                        desc: '교회와 선교 현장에서 상담을 요청하는 사람들을 위한 목회적 돌봄을 배웁니다. 관계 형성, 상담의 한계와 적절한 의뢰 방법, 그리고 교회 안에서 건강한 소그룹 공동체를 세우는 방법을 학습합니다.'

                    },
                    {
                        code: 'TKSF 501',
                        name: '영성 신학과 형성 입문',
                        credits: '3 학점',
                        desc: '그리스도 안에서의 새로운 삶과 성령 안에서 이루어지는 영적 형성의 과정을 탐구합니다. 영성 신학이 신학교 교육과 목회 사역에 갖는 의미와 성령께서 사람을 변화시키시는 과정을 학습합니다.'

                    },
                    {
                        code: 'TKSF 503',
                        name: '영성 형성을 위한 개인적 기초',
                        credits: '3 학점',
                        desc: '영적 성장과 관련된 인간관계, 결혼, 가족, 양육 등을 신학적·실천적으로 탐구합니다. 개인 및 가족사가 신앙과 관계에 미치는 영향을 살펴보고, 영적 공동체와 영적 지도를 경험합니다.'

                    },
                    {
                        code: 'TKSF 504',
                        name: '영성 형성, 소명 및 훈련',
                        credits: '1 학점',
                        desc: '성경이 말하는 다양한 부르심과 그리스도를 닮아가는 삶을 위한 영적 훈련을 탐구합니다. 다양한 영적 훈련과 수련회를 통해 개인의 사명과 목회적 소명을 더욱 깊이 이해하도록 돕습니다.'

                    },
                    {
                        code: 'TKSF 505',
                        name: '탈봇 영적 지도 I',
                        credits: '0 학점',
                        desc: '영성 형성 연구소(ISF)의 영적 지도자와 함께 기도와 영적 성장을 위한 개인 지도를 경험하는 과정입니다.'
                    },
                    {
                        code: 'TKSF 506',
                        name: '탈봇 영적 지도 II',
                        credits: '0 학점',
                        desc: '영성 형성 연구소(ISF)의 영적 지도자와 함께 지속적인 영적 지도와 기도 생활을 경험하며 영적 성장을 심화하는 과정입니다.'

                    },
                    {
                        code: 'TKTH 521',
                        name: '조직신학 I : 신론, 성경론, 창조론',
                        credits: '3 학점',
                        desc: '신학의 방법론과 성경의 영감 및 무오성, 하나님의 속성과 삼위일체, 창조와 천사, 하나님의 섭리를 중심으로 조직신학의 기초를 학습합니다.'

                    },
                    {
                        code: 'TKTH 522',
                        name: '조직신학 II : 기독론, 인간론, 죄론, 구원론',
                        credits: '3 학점',
                        desc: '인간의 본성과 타락, 죄의 영향, 그리스도의 인격과 사역, 그리고 중생·칭의·성화를 포함한 구원의 교리를 체계적으로 학습합니다.'
                    },
                    {
                        code: 'TKTH 623',
                        name: '조직신학 III : 성령론, 교회론, 종말론',
                        credits: '3 학점',
                        desc: '성령의 사역, 교회의 본질과 사명, 그리고 그리스도의 재림, 부활, 심판, 영원한 나라 등 종말론을 중심으로 조직신학을 학습합니다.'
                    },
                ]
            },
            {
                catTitle: '전공 및 선택 과목 (Specialization & Electives)',
                catDesc: '전공 필수 과목과 함께 아래 지정된 과목 중 2과목(6학점), 그리고 일반 선택 과목(9학점)을 이수해야 합니다.',
                courses: [
                    {
                        code: 'TKPT 592/691/791',
                        name: '현장 사역 실습 II, III, IV',
                        credits: '1 학점',
                        desc: '멘토와 함께하는 현장 사역 실습 과정입니다. 자기 평가와 멘토 평가를 통해 실제 목회 사역 경험을 점검하고, 마지막 단계에서는 신학교 교육과 사역을 통합적으로 적용합니다.'
                    },
                    {
                        code: 'TKPT 602',
                        name: '목회 사역',
                        credits: '3 학점',
                        desc: '목회자의 소명과 역할을 이해하고 예배, 예식, 병원 및 가정 심방 등 실제 목회 현장에서 필요한 사역을 학습합니다.'
                    },
                    {
                        code: 'TKPT 610',
                        name: '현대 성경적 설교',
                        credits: '3 학점',
                        desc: '창의적인 설교 형식, 설교자의 신뢰성, 청중과의 소통 등 효과적인 설교를 위한 다양한 요소를 연구합니다.'
                    },
                    {
                        code: 'TKPT 703',
                        name: '교회와 사회',
                        credits: '3 학점',
                        desc: '성경적 윤리와 지역 교회의 사회적 역할을 연구하며, 생명윤리, 가정폭력, 약물 문제 등 현대 사회 이슈를 성경적으로 조명합니다.'
                    },
                    {
                        code: 'TKPT 730',
                        name: '성경적 리더십과 관리',
                        credits: '3 학점',
                        desc: '성경적 원리에 기초한 조직 운영과 리더십을 배우며, 교회와 사역 현장에서 적용할 수 있는 관리와 지도력을 학습합니다.'
                    },
                    // 지정 선택 과목 리스트 
                    {
                        code: 'IKCL 555',
                        name: '세계 선교 입문 (지정 선택)',
                        credits: '선택 학점',
                        desc: '기독교 아웃리치의 본질; 세계 선교의 원리, 역사, 방법론을 연구합니다. - 지정 과목 중 택 2'
                    },
                    {
                        code: 'TKPH 602',
                        name: '변증학 (지정 선택)',
                        credits: '선택 학점',
                        desc: '역사, 과학, 철학 분야와 관련된 기독교 세계관과 다양한 기독교 변증적 대응을 검토합니다. - 지정 과목 중 택 2'
                    },
                    {
                        code: 'TKPT 510',
                        name: '전도와 제자화 전략 (지정 선택)',
                        credits: '선택 학점',
                        desc: '전도와 제자만들기 전략: 이 과정은 개인과 교회가 지역 상황에서 복음을 전하고 제자화하는 데 가장 적절한전략과 실천을 결정하기 위해 전도와 제자도에 대한 성경적 원리를 탐구합니다. - 지정 과목 중 택 2'
                    },
                    {
                        code: 'TKPT 608',
                        name: '전략적 교회 사역 개발 (지정 선택)',
                        credits: '선택 학점',
                        desc: ' 전략적 교회 사역 개발: 이 과정은 평생 제자 수련, 세대 간 사역, 새 신자 성장, 변혁적인 성경 교육, 사역을 위한 평신도 준비, 혁신적인 사역 자원 개발 등 지역 교회에서 구체적인 전략적 사역을 개발하는 방법에 중점을 둡니다.  - 지정 과목 중 택 2'
                    },
                    
                ]
            }
        ]
    },
    'maml': {
        title: 'MA-ML (목회 리더십 문학석사) - 총 49 학점',
        link: 'https://catalog.biola.edu/tst/macml/TAKM/#programrequirementstext',
        categories: [
            {
                catTitle: '선수 과목 (Prerequisite Courses)',
                courses: [
                    { code: 'TKBE 519', name: '구약성경 개관', credits: '선수 학점', desc: '엄선된 입문 및 중요 이슈, 관련 배경, 주요 주제와 분류, 중요한 문제 등 구약성서에 대한 광범위한 탐색입니다.' },
                    { code: 'TKBE 520', name: '신약성경 개관', credits: '선수 학점', desc: '선별된 입문 및 비평적 이슈, 관련 배경, 주요 주제 및 구분, 결정적 문제를 포함하여 신약성경 책에 대한 일반적인 개요입니다.' }
                ]
            },
            {
                catTitle: '프로그램 핵심 과목 (Program Core Courses)',
                catDesc: '성경 해석, 영성 형성, 조직신학의 기초를 다지는 핵심 필수 과정입니다.',
                courses: [
                    { 
                        code: 'TKBE 517', 
                        name: '해석학과 성경 연구 방법론', 
                        credits: '3 학점', 
                        desc: '다양한 성경 장르와 현상에 대한 전제, 일반 규칙 및 전문 원리 분석과 주석 방법 개발을 포함하여 성경의 건전한 해석 및 적용 원리에 대한 연구입니다.' 
                    },
                    { 
                        code: 'TKSF 501', 
                        name: '영성 신학과 영적 형성 입문', 
                        credits: '3 학점', 
                        desc: '영적 신학과 형성의 본질에 대한 입문 연구로 다음의 내용을 탐구합니다. 그리스도 안에서의 새로운 삶의 본질, 성령 안에서 형성되는 과정, 그리고 그분의 사역에 협력하기 위한 지침을 연구합니다. 신학교 훈련과 강의실 경험에 대한 영성 신학의 함의를 탐색합니다. 특히 죄책감, 수치심, 율법주의에 관련하여 그리스도 안에서의 삶의 의미를 배우고 원죄의 문제와 죄의 습관의 문제가 성령의 새 언약 안에서 어떻게 변화의 과정을 거치는 지에 대해서 탐구합니다. 또한 영성 발달에 대해서 주목하면서 성령이 티칭, 설교 및 제자화 사역에 어떻게 영향을 미치는지에 대해서 배웁니다.' 
                    },
                    { 
                        code: 'TKSF 503', 
                        name: '개인 영성 형성의 토대 연구', 
                        credits: '3 학점', 
                        desc: '영적 성장과 관련된 인간관계와 성별, 연애, 결혼, 가족 및 양육과 관련된 문제에 대한 신학적이고 경험적인 탐구입니다. 이 과정에는 개인 및 가족사가 신학적 전망, 정서적 일치, 관계적 매력 및 도덕적 결정에 미치는 영향에 대한 조사가 포함됩니다. 개인 평가와 일일 수련과정은 이 과정의 필수적인 부분입니다. 학생들은 영적 리더와 함께 개별로 영적 지도를 받게 되고 소그룹 내에서 관계를 지속하면서 영적 공동체와 중보기도를 경험하게 됩니다. 그리스도가 그들 안에서 어떻게 형성되는지에 대한 관계 능력을 깊이 탐구하여 더 깊은 수준의 신뢰와 취약성을 개발하게 됩니다.' 
                    },
                    { 
                        code: 'TKSF 504', 
                        name: '영성 형성, 소명, 수련', 
                        credits: '1 학점', 
                        desc: '신자의 소명과 성경에 나오는 다양한 부르심에 대한 신학적이고 경험적인 탐색을 시도합니다. 이런 시도는 하나님과 이웃을 사랑하는 일반적인 소명, 의와 그리스도의 형상을 따르는 훈련과 관련되어 있습니다. 자신의 소명에 대해 깊이 탐색하기 위해 성경이 가르쳐 주고 교회 역사를 통해 발전시켜 온 다양한 영적 수련에 대해 탐구합니다. 이 학습은 소그룹에서 진행되며 다양한 학습 방식을 포함합니다. 이 과정에는 수련 요소가 포함되어 있습니다. 수련과정에서는 다양한 영적 수련과 자신의 삶에서 하나님의 부르심, 특히 사역에 대한 개인적인 부르심에 초점을 맞춥니다.' 
                    },
                    { 
                        code: 'TKSF 505', 
                        name: '탈봇 영적 지도 I', 
                        credits: '0 학점', 
                        desc: 'ISF에 있는 영적 갱신 센터에서 진행되는 영적 지도는 개인적인 경험이 요청됩니다. 이 과정은 학생들에게 영성 형성 연구소의 훈련 받은 영적 지도자와 함께 기도와 성장의 삶을 탐구할 수 있는 기회를 제공합니다.' 
                    },
                    { 
                        code: 'TKSF 506', 
                        name: '탈봇 영적 지도 II', 
                        credits: '0 학점', 
                        desc: 'ISF에 있는 영적 갱신 센터에서 진행되는 영적 지도는 개인적인 경험이 요청됩니다. 이 과정은 학생들에게 영성 형성 연구소의 훈련 받은 영적 지도자와 함께 기도와 성장의 삶을 탐구할 수 있는 기회를 제공합니다.' 
                    },
                    { 
                        code: 'TKTH 521', 
                        name: '신학 I : 하나님, 성경, 창조', 
                        credits: '3 학점', 
                        desc: '신학과 신학 방법에 대한 소개입니다. 영감과 무오성을 지닌 성경. 하나님의 속성과 삼위일체 본성을 지니신 하나님. 하나님의 영원한 계획과 천사와 섭리를 포함한 하나님의 창조사역을 다룹니다.' 
                    },
                    { 
                        code: 'TKTH 522', 
                        name: '신학 II : 그리스도, 인간, 죄, 구원', 
                        credits: '3 학점', 
                        desc: '인간의 본성과 가족을 포함하여 하나님의 형상을 지닌 인간성. 타락과 죄가 인류에게 미치는 영향. 그리스도의 인격과 사역. 중생, 칭의, 성화를 포함한 구원의 성격과 적용의 내용을 탐구합니다.' 
                    },
                    { 
                        code: 'TKTH 623', 
                        name: '신학 III : 성령, 교회, 마지막 일', 
                        credits: '3 학점', 
                        desc: '성령의 인격과 사역. 살아있는 유기체이자 조직으로서 교회의 시작과 성격, 그 기능, 규례 및 사명. 그리스도의 재림, 그리스도의 천년 통치, 죽은 자의 부활, 심판, 영원한 상태를 포함한 하나님의 광범위한 왕국 목적을 탐구합니다.' 
                    }
                ]
            },
            {
                catTitle: '목회 리더십 전공 과목 (Specialization Courses)',
                courses: [
                    { 
                        code: 'TKPT 510', 
                        name: '복음주의와 제자화 전략', 
                        credits: '3 학점', 
                        desc: '이 과정은 개인과 교회가 지역 상황에서 복음을 전하고 제자화하는 데 가장 적절한 전략과 실천을 결정하기 위해 전도와 제자도에 대한 성경적 원리를 탐구합니다.' 
                    },
                    { 
                        code: 'TKPT 602', 
                        name: '목회사역', 
                        credits: '3 학점', 
                        desc: '목회자의 소명, 목적, 사역에서의 역할에 대해 공부합니다. 예배, 음악, 예식, 결혼식, 장례식, 병원 및 가정 방문에 대한 리더십을 제공하는 데 특별한 주의를 기울입니다.' 
                    },
                    { 
                        code: 'TKPT 703', 
                        name: '교회와 사회', 
                        credits: '3 학점', 
                        desc: '성경적 윤리와 지역 교회가 지역 사회에서 수행하는 역할에 대한 연구입니다. 생명의 신성함, 약물 남용, 가정 폭력, 사회적 질병 및 정치적 과정과 같은 주요 사회 문제에 특별한 관심을 기울일 것입니다.' 
                    },
                    { 
                        code: 'TKPT 730', 
                        name: '성경적 리더십과 관리행정', 
                        credits: '3 학점', 
                        desc: '조직 관리와 리더십에 대한 성경적 기초를 연구합니다. 성경적 기초를 바탕으로 기독교 봉사와 사역에 적용할 수 있는 계획, 조직, 지도 및 지원 과정을 탐색합니다.' 
                    }
                ]
            },
            {
                catTitle: '지정 선택 과목 (Select 18 credits)',
                catDesc: '다음 과목들 중에서 총 18학점을 자율적으로 선택하여 이수해야 합니다.',
                courses: [
                    { code: 'IKCL 555', name: '세계 선교 입문', credits: '선택 학점', desc: '기독교 아웃리치의 본질; 세계 선교의 원리, 역사, 방법론을 연구합니다.' },
                    { code: 'TKNT 701', name: '신약의 세계', credits: '선택 학점', desc: '예수 그리스도의 시대와 초기 교회 시기의 유대교 및 헬레니즘 세계의 종교적 발전, 문학, 지리, 문화적 배경을 고찰하며, 신약성경의 역사적 배경과 고고학적 자료를 탐구하는 과목이다.' },
                    { code: 'TKOT 745', name: '구약의 세계', credits: '선택 학점', desc: '고대 근동 환경 속에서 이스라엘의 종교, 문학, 지리, 고고학, 그리고 문화를 연구하는 구약성경 배경 과목이다' },
                    { 
                        code: 'TKPH 602', 
                        name: '변증학', 
                        credits: '선택 학점', 
                        desc: '역사, 과학, 철학 분야와 관련된 기독교 세계관과 다양한 기독교 변증적 대응을 검토합니다.' 
                    },
                    { 
                        code: 'TKPT 591', 
                        name: '사역현장 실습 I', 
                        credits: '선택 학점', 
                        desc: '사역의 실제적인 요소를 소개합니다. 멘토십, 진로 계획, 현장 경험, 현장 실습 준비에 중점을 둡니다.' 
                    },
                    { 
                        code: 'TKPT 608', 
                        name: '전략적 교회 사역 개발', 
                        credits: '선택 학점', 
                        desc: '이 과정은 평생 제자 수련, 세대 간 사역, 새 신자 성장, 변혁적인 성경 교육, 사역을 위한 평신도 준비, 혁신적인 사역 자원 개발 등 지역 교회에서 구체적인 전략적 사역을 개발하는 방법에 중점을 둡니다.' 
                    },
                    { 
                        code: 'TKPT 609', 
                        name: '강해 설교', 
                        credits: '선택 학점', 
                        desc: '성경적으로 정확하고, 따르기 쉽고, 듣기에 흥미롭고, 현대의 필요에 맞는 설교 작성을 위한 과정입니다.' 
                    },
                    { 
                        code: 'TKPT 610', 
                        name: '현대 성경적 설교', 
                        credits: '선택 학점', 
                        desc: '창의적인 설교 형식, 설교자의 신뢰도, 청중의 동기부여, 강당 크기 및 모양, 효율적 구성 및 사역 주간 관련성을 포함하여 설교 효과로 이어지는 요소에 대한 연구입니다.' 
                    },
                    { 
                        code: 'TKPT 701', 
                        name: '목회적 돌봄과 상담의 기초', 
                        credits: '선택 학점', 
                        desc: '교회 및 선교단체에서 상담을 요청하는 사람들을 위한 사역을 탐구합니다. 관계 형성 기술부터 시작하여 도움을 주는 데 있어 자신의 한계를 발견하고 적절한 의뢰 절차를 배웁니다. 그 다음에는 교회 사역 내에서 소규모 커뮤니티를 구축하는 방법을 탐구하는 데 중점을 둡니다.' 
                    },
                    { code: 'TKPT 745', name: '영적 전투의 이슈들', credits: '선택 학점', desc: '현대의 다양한 치유사역, 축사 사역, 내적 치유 기도 모델들을 다학제적 관점에서 비평적으로 검토한다. 본 과목은 이러한 현상에 대해 성경적·신학적·역사적 관점을 형성하고, 문화적·인류학적 차원과 관련된 심리적 역학을 탐구한다. 궁극적으로 성경에 기초한 실천적이며 통합적인 사역 모델을 개발하는 것을 목표로 한다.' },
                    { code: 'TKPT 765', name: '목회 상담 세미나', credits: '선택 학점', desc: '목회상담 분야의 다양한 주제를 선택하여 심층적으로 다루는 연구 중심의 과목이다. ' },
                    { code: 'TKTH 630', name: '일터 신학', credits: '선택 학점', desc: '하나님의 나라 경륜 속에서 ‘일(work)’이 차지하는 의미와 역할을 탐구하는 과목이다. 창조 질서에서 나타난 노동의 패턴, 이스라엘 신정 공동체 안에서의 노동 양식, 그리고 예수 그리스도의 진리 안에서 구속된 현재 시대의 일에 대한 성경적 이해를 다룬다. 특히 일터를 그리스도인의 영적 형성의 장으로 보고, 직장에서 그리스도를 위한 리더로 서기 위한 기반으로서 ‘일의 신학적 의미’에 집중한다.' }
                ]
            }
        ]
    },

    'mabp': {
        title: 'MA-BP (성경강해 문학석사) - 총 53 학점',
        link: 'https://catalog.biola.edu/tst/macml/TAKB/#programrequirementstext',
        categories: [
            {
                catTitle: '선수 과목 (Prerequisite Courses)',
                courses: [
                    { code: 'TKBE 519', name: '구약성경 개관', credits: '선수 학점', desc: '엄선된 입문 및 중요 이슈, 관련 배경, 주요 주제와 분류, 중요한 문제 등 구약성서에 대한 광범위한 탐색입니다.' },
                    { code: 'TKBE 520', name: '신약성경 개관', credits: '선수 학점', desc: '선별된 입문 및 비평적 이슈, 관련 배경, 주요 주제 및 구분, 결정적 문제를 포함하여 신약성경 책에 대한 일반적인 개요입니다.' }
                ]
            },
            {
                catTitle: '프로그램 핵심 과목 (Program Core Courses)',
                courses: [
                    { 
                        code: 'TKBE 517', 
                        name: '해석학과 성경 연구 방법론', 
                        credits: '3 학점', 
                        desc: '해석학과 성경연구방법: 다양한 성경 장르와 현상에 대한 전제, 일반 규칙 및 전문 원리 분석과 주석 방법 개발을 포함하여 성경의 건전한 해석 및 적용 원리에 대한 연구입니다.' 
                    },
                    { 
                        code: 'TKSF 501', 
                        name: '영성 신학과 영적 형성 입문', 
                        credits: '3 학점', 
                        desc: '영영성 신학과 영적 형성 입문: 영적 신학과 형성의 본질에 대한 입문 연구로 다음의 내용을 탐구합니다. 그리스도 안에서의 새로운 삶의 본질, 성령 안에서 형성되는 과정, 그리고 그분의 사역에 협력하기 위한 지침을 연구합니다. 신학교 훈련과 강의실 경험에 대한 영성 신학의 함의를 탐색합니다. 특히 죄책감, 수치심, 율법주의에 관련하여 그리스도 안에서의 삶의 의미를 배우고 원죄의 문제와 죄의 습관의 문제가 성령의 새 언약 안에서 어떻게 변화의 과정을 거치는 지에 대해서 탐구합니다. 또한 영성 발달에 대해서 주목하면서 성령이 티칭, 설교 및 제자화 사역에 어떻게 영향을 미치는지에 대해서 배웁니다. ' 
                    },
                    { 
                        code: 'TKSF 503', 
                        name: '개인 영성 형성의 토대 연구', 
                        credits: '3 학점', 
                        desc: '개인 영성 형성의 토대 연구: 영적 성장과 관련된 인간관계와 성별, 연애, 결혼, 가족 및 양육과 관련된 문제에 대한 신학적이고 경험적인 탐구입니다. 이 과정에는 개인 및 가족사가 신학적 전망, 정서적 일치, 관계적 매력 및 도덕적 결정에 미치는 영향에 대한 조사가 포함됩니다. 개인 평가와 일일 수련과정은 이 과정의 필수적인 부분입니다. 학생들은 영적 리더와 함께 개별로 영적 지도를 받게 되고 소그룹 내에서 관계를 지속하면서 영적 공동체와 중보기도를 경험하게 됩니다. 그리스도가 그들 안에서 어떻게 형성되는지에 대한 관계 능력을 깊이 탐구하여 더 깊은 수준의 신뢰와 취약성을 개발하게 됩니다.' 
                    },
                    { 
                        code: 'TKSF 504', 
                        name: '영성 형성, 소명, 수련', 
                        credits: '1 학점', 
                        desc: '영성 형성, 소명, 수련: 신자의 소명과 성경에 나오는 다양한 부르심에 대한 신학적이고 경험적인 탐색을 시도합니다. 이런 시도는 하나님과 이웃을 사랑하는 일반적인 소명, 의와 그리스도의 형상을 따르는 훈련과 관련되어 있습니다. 자신의 소명에 대해 깊이 탐색하기 위해 성경이 가르쳐 주고 교회 역사를 통해 발전시켜 온 다양한 영적 수련에 대해 탐구합니다. 이 학습은 소그룹에서 진행되며 다양한 학습 방식을 포함합니다. 이 과정에는 수련 요소가 포함되어 있습니다. 수련과정에서는 다양한 영적 수련과 자신의 삶에서 하나님의 부르심, 특히 사역에 대한 개인적인 부르심에 초점을 맞춥니다.' 
                    },
                    { 
                        code: 'TKSF 505', 
                        name: '탈봇 영적 지도 I', 
                        credits: '0 학점', 
                        desc: 'ISF에 있는 영적 갱신 센터에서 진행되는 영적 지도는 개인적인 경험이 요청됩니다. 이 과정은 학생들에게 영성 형성 연구소의 훈련 받은 영적 지도자와 함께 기도와 성장의 삶을 탐구할 수 있는 기회를 제공합니다.' 
                    },
                    { 
                        code: 'TKSF 506', 
                        name: '탈봇 영적 지도 II', 
                        credits: '0 학점', 
                        desc: 'ISF에 있는 영적 갱신 센터에서 진행되는 영적 지도는 개인적인 경험이 요청됩니다. 이 과정은 학생들에게 영성 형성 연구소의 훈련 받은 영적 지도자와 함께 기도와 성장의 삶을 탐구할 수 있는 기회를 제공합니다.' 
                    },
                    { 
                        code: 'TKTH 521', 
                        name: '신학 I : 하나님, 성경, 창조', 
                        credits: '3 학점', 
                        desc: '신학과 신학 방법에 대한 소개입니다. 영감과 무오성을 지닌 성경. 하나님의 속성과 삼위일체 본성을 지니신 하나님. 하나님의 영원한 계획과 천사와 섭리를 포함한 하나님의 창조사역을 다룹니다.' 
                    },
                    { 
                        code: 'TKTH 522', 
                        name: '신학 II : 그리스도, 인간, 죄, 구원', 
                        credits: '3 학점', 
                        desc: '인간의 본성과 가족을 포함하여 하나님의 형상을 지닌 인간성. 타락과 죄가 인류에게 미치는 영향. 그리스도의 인격과 사역. 중생, 칭의, 성화를 포함한 구원의 성격과 적용의 내용을 탐구합니다.' 
                    },
                    { 
                        code: 'TKTH 623', 
                        name: '신학 III : 성령, 교회, 마지막 일', 
                        credits: '3 학점', 
                        desc: '성령의 인격과 사역. 살아있는 유기체이자 조직으로서 교회의 시작과 성격, 그 기능, 규례 및 사명. 그리스도의 재림, 그리스도의 천년 통치, 죽은 자의 부활, 심판, 영원한 상태를 포함한 하나님의 광범위한 왕국 목적을 탐구합니다.' 
                    }
                ]
            },
            {
                catTitle: '성경 강해 및 목회 과목 (Biblical and Pastoral Ministry Courses)',
                courses: [
                    { 
                        code: 'TKPT 591', 
                        name: '사역현장 실습 I', 
                        credits: '1 학점', 
                        desc: '사역의 실제적인 요소를 소개합니다. 멘토십, 진로 계획, 현장 경험, 현장 실습 준비에 중점을 둡니다.' 
                    },
                    { 
                        code: 'TKPT 592', 
                        name: '사역현장 실습 II', 
                        credits: '0 학점', 
                        desc: '자체 평가 양식 및 멘토 평가 양식을 포함한 실습 관계에 대한 주간 교육입니다.' 
                    },
                    { 
                        code: 'TKPT 602', 
                        name: '목회사역', 
                        credits: '3 학점', 
                        desc: '목회자의 소명, 목적, 사역에서의 역할에 대해 공부합니다. 예배, 음악, 예식, 결혼식, 장례식, 병원 및 가정 방문에 대한 리더십을 제공하는 데 특별한 주의를 기울입니다.' 
                    },
                    { 
                        code: 'TKPT 609', 
                        name: '강해 설교', 
                        credits: '3 학점', 
                        desc: '성경적으로 정확하고, 따르기 쉽고, 듣기에 흥미롭고, 현대의 필요에 맞는 설교 작성을 위한 과정입니다.' 
                    },
                    { 
                        code: 'TKPT 610', 
                        name: '현대 성경적 설교', 
                        credits: '3 학점', 
                        desc: '창의적인 설교 형식, 설교자의 신뢰도, 청중의 동기부여, 강당 크기 및 모양, 효율적 구성 및 사역 주간 관련성을 포함하여 설교 효과로 이어지는 요소에 대한 연구입니다.' 
                    },
                    { 
                        code: 'TKPT 691', 
                        name: '사역현장 실습 III', 
                        credits: '0 학점', 
                        desc: '자체 평가 양식 및 멘토의 평가를 포함한 실습 과정입니다.' 
                    },
                    { 
                        code: 'TKPT 701', 
                        name: '목회적 돌봄과 상담의 기초', 
                        credits: '2 학점', 
                        desc: '교회 및 선교단체에서 상담을 요청하는 사람들을 위한 사역을 탐구합니다. 관계 형성 기술부터 시작하여 도움을 주는 데 있어 자신의 한계를 발견하고 적절한 의뢰 절차를 배웁니다. 그 다음에는 교회 사역 내에서 소규모 커뮤니티를 구축하는 방법을 탐구하는 데 중점을 둡니다.' 
                    },
                    { 
                        code: 'TKPT 703', 
                        name: '교회와 사회', 
                        credits: '3 학점', 
                        desc: '성경적 윤리와 지역 교회가 지역 사회에서 수행하는 역할에 대한 연구입니다. 생명의 신성함, 약물 남용, 가정 폭력, 사회적 질병 및 정치적 과정과 같은 주요 사회 문제에 특별한 관심을 기울일 것입니다.' 
                    },
                    { 
                        code: 'TKPT 730', 
                        name: '성경적 리더십과 관리행정', 
                        credits: '3 학점', 
                        desc: '조직 관리와 리더십에 대한 성경적 기초를 연구합니다. 성경적 기초를 바탕으로 기독교 봉사와 사역에 적용할 수 있는 계획, 조직, 지도 및 지원 과정을 탐색합니다. ' 
                    },
                    { 
                        code: 'TKPT 791', 
                        name: '사역현장 실습 IV', 
                        credits: '1 학점', 
                        desc: '사역과 신학교의 모든 훈련을 통합하여 배우는 과정입니다. 이는 기독교 사역의 다양한 측면에 대한 경험을 점검하는 과정이라 할 수 있습니다. 이 과정에서 전체적인 훈련이 제대로 이뤄지도록 멘토의 도움을 받게 됩니다.' 
                    }
                ]
            },
            {
                catTitle: '언어 및 주해 과정 (Language/Exegesis Courses)',
                catDesc: '다음 신약(New Testament) 또는 구약(Old Testament) 옵션 중 하나를 선택하여 이수합니다.',
                courses: [
                    { code: 'TKNT 501', name: 'Beginning Greek I - Korean (신약 옵션)', credits: '3 학점', desc: '신약 헬라어의 기본 요소에 대한 입문 연구의 1부입니다. 2학기에는 신약성경 일부를 번역합니다. 헬라어 기초 과정의 전체 시퀀스를 충분히 완성하지 못한 학생들을 위해 설계되었습니다.' },
                    { code: 'TKNT 502', name: 'Beginning Greek II - Korean (신약 옵션)', credits: '3 학점', desc: '신약 헬라어의 기본 요소에 대한 입문 연구의 2부입니다. 2학기에는 신약성경 일부를 번역합니다. 헬라어 기초 과정의 전체 시퀀스를 완성하지 못한 학생들을 위해 설계되었습니다.' },
                    { code: 'TKNT 503', name: 'Introduction to Exegesis - Korean (신약 옵션)', credits: '3 학점', desc: '형태론 및 구문에 대한 포괄적인 연구, 헬라어 어휘력 향상, 본문 비평 소개, 헬라어 신약성서의 선택된 구절을 읽는 주해 방법. 성경 본문을 이해하기 위한 도구로서 헬라어 연구의 가치를 강조하기 위해 고안되었습니다.' },
                    { code: 'TKNT 604/605', name: 'Exegesis in the Gospels or Epistles - Korean (신약 옵션)', credits: '3 학점', desc: '복음서의 헬라어 본문에서 선택한 구절에 대한 주해 연구입니다. 주해적 방법론을 적용하고 각 책의 역사적 배경, 구성, 저자, 특징 등 배경 문제에 대해 논의합니다. 성경 본문 해석을 위한 현대 비평 방법의 평가에 특별한 관심을 기울입니다.' },
                    { code: 'TKOT 603', name: 'Elements of Hebrew I - Korean (구약 옵션)', credits: '3 학점', desc: '히브리어 문법 I: 번역 및 작문 연습이 포함된 기본 구약 히브리어 문법을 배웁니다. ' },
                    { code: 'TKOT 604', name: 'Elements of Hebrew II - Korean (구약 옵션)', credits: '3 학점', desc: '히브리어 문법 II: 선택된 성경 본문의 읽기 및 번역에 중점을 둔 추가 구약 히브리어 문법 및 구문을 배웁니다.' },
                    { code: 'TKOT 703', name: 'Introduction to Hebrew Exegesis - Korean (구약 옵션)', credits: '3 학점', desc: '문법 분석 및 주석 방법 소개(특히 텍스트 비평, 번역, 구문 및 어휘 분석)를 포함한 히브리어 원문 텍스트 읽기(중급 수준)과정입니다. ' },
                    { code: 'TKOT 722', name: 'Hebrew Exegesis - Korean (구약 옵션)', credits: '2 학점', desc: '히브리어 텍스트 읽기(고급 수준) 및 선택한 텍스트에 대한 포괄적인 해석 방법을 다룹니다.' }
                ]
            },
            {
                catTitle: '선택 과목 (Elective Course)',
                catDesc: '지도교수와 상의하여 추가로 3학점의 TKPT 전공 선택 과목을 이수합니다.',
                courses: [
                    { code: 'TKPT 선택', name: 'Elective (any TKPT course)', credits: '3 학점', desc: '' }
                ]
            }
        ]
    },
    'cert': {
        title: '신학 증명서 과정 (Certificate) - 총 18 학점',
        link: 'https://www.biola.edu/degrees/g/biblical-and-theological-studies-certificate',
        categories: [
            {
                catTitle: '증명서 필수 과목 (Curriculum Requirements)',
                catDesc: '성경의 전반적인 이해와 기독교 신학의 핵심 기초를 다지는 총 6개 과목(18학점)으로 구성되어 있습니다.',
                courses: [
                    { code: 'TKBE 517', name: '해석학과 성경 연구 방법론', credits: '3 학점', desc: '해석학과 성경연구방법: 다양한 성경 장르와 현상에 대한 전제, 일반 규칙 및 전문 원리 분석과 주석 방법 개발을 포함하여 성경의 건전한 해석 및 적용 원리에 대한 연구입니다.' },
                    { code: 'TKBE 519', name: '구약성경 개관', credits: '3 학점', desc: '엄선된 입문 및 중요 이슈, 관련 배경, 주요 주제와 분류, 중요한 문제 등 구약성서에 대한 광범위한 탐색입니다.' },
                    { code: 'TTBE 520', name: '신약성경 개관', credits: '3 학점', desc: '선별된 입문 및 비평적 이슈, 관련 배경, 주요 주제 및 구분, 결정적 문제를 포함하여 신약성경 책에 대한 일반적인 개요입니다.' },
                    { code: 'TKTH 521', name: '조직신학 I (신론, 성경론, 창조론)', credits: '3 학점', desc: '신학과 신학 방법에 대한 소개입니다. 영감과 무오성을 지닌 성경. 하나님의 속성과 삼위일체 본성을 지니신 하나님. 하나님의 영원한 계획과 천사와 섭리를 포함한 하나님의 창조사역을 다룹니다.' },
                    { code: 'TKTH 522', name: '조직신학 II (기독론, 인간론, 죄론, 구원론)', credits: '3 학점', desc: '인간의 본성과 가족을 포함하여 하나님의 형상을 지닌 인간성. 타락과 죄가 인류에게 미치는 영향. 그리스도의 인격과 사역. 중생, 칭의, 성화를 포함한 구원의 성격과 적용의 내용을 탐구합니다.' },
                    { code: 'TKTH 623', name: '조직신학 III (성령론, 교회론, 종말론)', credits: '3 학점', desc: '성령의 인격과 사역. 살아있는 유기체이자 조직으로서 교회의 시작과 성격, 그 기능, 규례 및 사명. 그리스도의 재림, 그리스도의 천년 통치, 죽은 자의 부활, 심판, 영원한 상태를 포함한 하나님의 광범위한 왕국 목적을 탐구합니다.' }
                ]
            }
        ]
    }
};

// ★ 전체 학점 표시 여부 설정 (true: 모든 프로그램에서 학점 보임 / false: 모두 숨김)
const GLOBAL_SHOW_CREDITS = false; 

const modalOverlay = document.getElementById('programModal');
const modalCloseBtn = document.getElementById('closeProgramModal');
const accordionContainer = document.getElementById('modalAccordion');

// 모달 열기 및 데이터 렌더링
document.querySelectorAll('.program-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const progKey = this.getAttribute('data-program');
        const data = programData[progKey];

        if (!data || !data.categories) return;

        // 헤더 및 푸터 정보 설정
        document.getElementById('modalProgramTitle').innerText = data.title;
        document.getElementById('modalOfficialLink').href = data.link;

        // 아코디언 HTML 동적 생성 (카테고리별 분리)
        let accordionHTML = '';

        data.categories.forEach((category, catIndex) => {
            accordionHTML += `
                <div class="category-section">
                    <h3 class="category-title">${category.catTitle}</h3>
                    ${category.catDesc ? `<div class="category-desc">${category.catDesc}</div>` : ''}
                    <div class="category-courses">
            `;

            category.courses.forEach((course, courseIndex) => {
                const isOpen = (catIndex === 0 && courseIndex === 0) ? 'open' : '';

                accordionHTML += `
                    <div class="course-item ${isOpen}">
                        <div class="course-header">
                            <span class="c-code">${course.code}</span>
                            <span class="c-name">${course.name}</span>
                            ${GLOBAL_SHOW_CREDITS && course.credits ? `<span class="c-credits">${course.credits}</span>` : ''}
                            <span class="c-toggle-icon">+</span>
                        </div>
                        <div class="course-body">
                            <div class="course-body-inner">
                                ${course.desc}
                            </div>
                        </div>
                    </div>
                `;
            });

            accordionHTML += `
                    </div>
                </div>
            `;
        });

        accordionContainer.innerHTML = accordionHTML;

        // 개별 과목 클릭 (아코디언 토글) 이벤트 바인딩
        const courseHeaders = accordionContainer.querySelectorAll('.course-header');
        courseHeaders.forEach(header => {
            header.addEventListener('click', function () {
                const parentItem = this.parentElement;

                // 지금 클릭한 아코디언이 이미 열려있는 상태인지 확인
                const isOpen = parentItem.classList.contains('open');

                // 🌟 핵심 해결책: 일단 모달 안에 있는 모든 아코디언을 전부 닫음
                accordionContainer.querySelectorAll('.course-item').forEach(item => {
                    item.classList.remove('open');
                });

                // 방금 클릭한 아코디언이 닫혀있던 거라면 열어줌
                if (!isOpen) {
                    parentItem.classList.add('open');
                }
            });
        });

        // 모달 띄우기
        modalOverlay.classList.add('show');

        // ★중요: 모달을 새로 열 때 스크롤 위치를 맨 위로 초기화
        document.querySelector('.program-modal-body').scrollTop = 0;
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    });
});

// 모달 닫기 로직
function closeProgramModal() {
    modalOverlay.classList.remove('show');
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
}

modalCloseBtn.addEventListener('click', closeProgramModal);
modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeProgramModal();
});