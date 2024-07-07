const Footer = () => (
    <footer className="py-2 border-t border-black">
        <div className="text-center text-sm">
            © 2024 Dongmin Son. All rights reserved.
        </div>
        <div className="flex justify-center gap-2">
            <a
                href="mailto:dmson1218@naver.com"
                className="text-sm hover:underline"
            >
                Email.
            </a>
            <a
                href="https://github.com/dmson1218"
                className="text-sm hover:underline"
            >
                GitHub.
            </a>
            <a
                href="https://www.instagram.com/for_free_1218"
                className="text-sm hover:underline"
            >
                Instagram.
            </a>
        </div>
    </footer>
);

export default Footer;
