import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import styles from "./page.module.scss";
import Intro from "@/components/Sections/Home/Intro/Intro";
import About from "@/components/Sections/Home/About/About";
import DiscographyGrid from "@/components/Sections/Home/DiscographyGrid/DiscographyGrid";
import Contact from "@/components/Sections/Home/Contact/Contact";
import Footer from "@/components/Sections/Home/Footer/Footer";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className={styles.main}>
        <Intro />
        <About />
        <DiscographyGrid />
        <Contact />
        <Footer />
      </main>
    </MaxWidthWrapper>
  );
}
