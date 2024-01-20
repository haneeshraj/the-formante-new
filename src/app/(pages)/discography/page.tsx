import styles from "./page.module.scss";
import { ALL_SINGLES } from "@/config";
import { getAlbums, getSingles, getSnippets } from "@/functions/data";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Reveal from "@/components/Reveal/Reveal";
import DiscographySelector from "@/components/DiscographySelector/DiscographySelector";

const DiscographyPage = async () => {
  // const singles = await getSingles();;
  const singles = ALL_SINGLES;
  const albums: [] = [];
  const snippets: [] = [];

  // const singles: Single[] = ALL_SINGLES;

  return (
    <div className={styles.container}>
      <AnimatedText type="h2" text="Discography" className={styles.title} />
      <Reveal>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </Reveal>

      <DiscographySelector
        singles={singles}
        albums={albums}
        snippets={snippets}
      />
    </div>
  );
};

export default DiscographyPage;
