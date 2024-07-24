import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { WelcomeText } from '../components/welcomeText/welcomeText'
import LinkInput from '../components/linkInput/linkInput'
export function HomePage() {
  return (
    <>
      <WelcomeText/>
      <LinkInput/>
      <ColorSchemeToggle />
    </>
  );
}
