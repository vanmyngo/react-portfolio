import { ReactComponent as PlaywrightSvg } from './playwright.svg';

const Playwright = ({ size = 42, className = '', ...props }) => (
    <PlaywrightSvg
        className={className}
        style={{ width: size, height: size }}
        {...props}
    />
);

export default Playwright;