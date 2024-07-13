import CheckImage from '#components/CheckImage';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="pb-6 border-b my-border flex justify-between">
                <div className="my-auto flex flex-col gap-3">
                    <div className="text-2xl sm:text-3xl font-bold">
                        Dongmin Son
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-lg sm:text-xl flex gap-1 font-semibold">
                            <CheckImage size={4} />
                            프론트엔드 개발자를 희망합니다.
                        </div>
                        <div className="text-lg sm:text-xl flex gap-1 font-semibold">
                            <CheckImage size={4} />
                            사람들의 인정을 먹고 삽니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-6 border-b my-border">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl sm:text-2xl font-bold">
                            부스트캠프 웹·모바일 8기 멤버십
                            <div className="text-sm sm:text-base italic font-normal">
                                웹 풀스택 과정 & 프론트엔드 과정 - 2023.08 ~
                                2023.12
                            </div>
                        </div>
                        <div className="text-sm sm:text-base">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-1 text-lg sm:text-xl font-bold">
                                        <CheckImage size={4} />
                                        4주 간의 웹 풀스택 학습 스프린트
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        바닐라 자바스크립트와 Express
                                        프레임워크를 활용해 웹 어플리케이션을
                                        개발하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        데이터를 저장하고 활용하기 위해 MySQL,
                                        fetch API에 대해 학습하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        소프트웨어 디자인 패턴에 대해 학습하고
                                        MVC 패턴을 적용하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        로그인 기능을 구현하기 위해 쿠키, 세션,
                                        토큰의 차이점에 대해 학습하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        데이터를 원형 그래프로 시각화하기 위해
                                        SVG, 벡터에 대해 학습하였습니다.
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-1 text-lg sm:text-xl font-bold">
                                        <CheckImage size={4} />
                                        8주 간의 프론트엔드 학습 스프린트
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        페어 프로그래밍을 통해 개발 환경 설정,
                                        컴포넌트 분리, 라이브러리 스터디 등을
                                        함께 진행하며 효율적인 협업에 대해
                                        고찰하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        목업 데이터를 활용해 API가 완성되기 전
                                        프론트엔드 파트에서 데이터 흐름을 제어할
                                        수 있는 방법에 대해 학습하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        즉시 실행 함수를 통한 상태 관리 및
                                        컴포넌트의 다형성과 책임에 대해
                                        학습하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        타이머, transition, transform 등을
                                        활용한 애니메이션 구현 방식에 대해
                                        학습하였습니다.
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-1 text-lg sm:text-xl font-bold">
                                        <CheckImage size={4} />
                                        6주 간의 그룹 프로젝트
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        Figma를 활용해 프로토타입을 작성하고
                                        디자인을 유지보수하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        Notion을 활용해 팀 빌딩, 기획, 백로그
                                        작성, 회고, 개발 일지 작성을
                                        진행하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        GitHub를 활용해 마일스톤, 이슈를
                                        관리하고 코드 리뷰를 진행하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        GitHub Flow를 채택해 효율적으로 소스
                                        코드를 관리하고 배포하였습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-xl sm:text-2xl font-bold">
                            부스트캠프 웹·모바일 8기 챌린지
                            <div className="text-sm sm:text-base italic font-normal">
                                웹 풀스택 과정 - 2023.07 ~ 2023.08
                            </div>
                        </div>
                        <div className="text-sm sm:text-base">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-1 text-lg sm:text-xl font-bold">
                                        <CheckImage size={4} />
                                        Node.js 환경에서 CS 지식을 활용한
                                        프로그래밍 미션을 매일 해결하였습니다.
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        클래스, 상속 등 객체 지향 프로그래밍을
                                        활용한 보드 게임
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        비동기 프로그래밍을 활용한 프로세스
                                        스케줄링
                                    </div>
                                    <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                        <CheckImage size={3} />
                                        이외 자료구조, 네트워크 등
                                    </div>
                                </div>
                                <div className="flex gap-1 text-lg sm:text-xl font-bold">
                                    <CheckImage size={4} />
                                    GitHub Gist를 활용하며 버전 관리에 대해
                                    이해할 수 있었습니다.
                                </div>
                                <div className="flex gap-1 text-lg sm:text-xl font-bold">
                                    <CheckImage size={4} />
                                    Notion, Slack을 활용해 약 250명의 동료와
                                    지식을 주고받았으며, 수료 이후에도 긍정
                                    에너지를 함께 나눴던 팀원들과 지속적으로
                                    소통하고 있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-6 border-b my-border">
                <a
                    href="https://github.com/boostcampwm2023/web08-ByeolSoop"
                    className="text-xl sm:text-2xl font-bold hover:underline"
                >
                    별숲
                </a>
                <div className="text-sm sm:text-base italic font-normal">
                    부스트캠프 그룹 프로젝트 - 2023.10 ~ 2023.12
                </div>
                <img src="/image/소개 1.png" className="my-2 border" />
                <div className="text-sm sm:text-base">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1 text-lg sm:text-xl font-semibold">
                            <CheckImage size={4} />
                            3D 밤하늘에 일기를 별의 형태로 그려나갈 수 있는
                            서비스
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex gap-1 text-lg sm:text-xl font-semibold">
                                <CheckImage size={4} />
                                디자이너의 도움 없이 React와 Three.js를 활용한
                                Interactive UI
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                벡터와 쉐이더를 통해 밤하늘 오브젝트의
                                그라데이션 컬러링으로 지평선을 강조했습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                다양한 별의 모양을 제공하기 위해 2차원 그래픽
                                SVG 파일을 3차원 오브젝트로 활용할 수 있도록 Web
                                API의 Blob 객체를 활용하였습니다.
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex gap-1 text-lg sm:text-xl font-semibold">
                                <CheckImage size={4} />
                                카메라 시점 전환 이벤트가 제공하는 고개를 돌려
                                밤하늘을 감상하는 듯한 UX
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                밤하늘의 빈 공간을 더블 클릭하여 일기(별)을
                                생성할 수 있는데, 클릭 좌표로 시점이 서서히
                                이동한 후 생성 창을 띄우면 더욱 만족스러운 UX를
                                제공할 수 있으리라 판단했습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                카메라가 항상 바라보며 공전하는 OrbitControls의
                                타겟 좌표를 변경하였지만 공전 궤도가 바뀌기
                                때문에 카메라의 위치를 전혀 예측할 수 없다는
                                문제가 있었습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                카메라 주변에 아주 작은 투명 구를 추가하고
                                raycaster 객체를 활용하여 공전 궤도 범위를 크게
                                줄임으로써 문제를 어느 정도 개선할 수
                                있었습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                근본적인 해결을 위해 타겟 좌표를 항상 원점에
                                고정하고 카메라를 투명 구 위에서 이동하도록
                                하였습니다. 따라서 카메라의 위치가 안정적인 시점
                                전환 이벤트를 구현할 수 있었습니다.
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex gap-1 text-lg sm:text-xl font-semibold">
                                <CheckImage size={4} />
                                항상 최신 데이터를 유지하면서도 URL 변경이 없는
                                SPA
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                별숲 서비스는 일기를 조회할 수 있는 방법이
                                다양하게 존재하기 때문에 조회 시 이전 페이지의
                                정보를 기억해야 하는 문제가 있었습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                history API를 직접 활용하면 문제를 해결함과
                                동시에 브라우저의 앞으로 가기 및 뒤로 가기
                                버튼까지 활용할 수 있을 것이라 기대했지만
                                서버와의 데이터 불일치 문제가 있었습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                브라우저 자체 기능을 활용한 이점을 포기하더라도
                                Recoil 라이브러리의 Atom을 활용한 방식이
                                데이터의 신선도 측면에서 효율적이라
                                판단했습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                React-Query 라이브러리의 강력한 캐싱 기능을
                                활용해 서버의 부담을 줄이고, 각 응답 상태 코드에
                                따라 로직 흐름을 제어하고자 했습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />
                                액세스 토큰이 만료된 경우(401 코드), UX를
                                향상시키기 위해 토큰 재발급 이후 사용자의 요청이
                                다시 한 번 전송되어야 하는 등 예외 처리가
                                중요했습니다.
                            </div>
                            <div className="ml-6 flex gap-1 text-base sm:text-lg">
                                <CheckImage size={3} />각 코드에 따른 콜백
                                함수를 수집해 로직을 분리하는 handleResponse
                                헬퍼 함수를 작성하여 각종 예외를 처리하고 코드의
                                가독성을 높였습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-6 border-b my-border">
                <div className="text-xl sm:text-2xl font-bold">
                    성균관대학교 컴퓨터교육과
                </div>
                <div className="text-sm sm:text-base italic font-normal">
                    2019.03 ~ 2025.08
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
