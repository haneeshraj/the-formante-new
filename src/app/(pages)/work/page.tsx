import AnimatedText from "@/components/AnimatedText/AnimatedText";
import styles from "./page.module.scss";
import Reveal from "@/components/Reveal/Reveal";

const WorkPage = () => {
  const services = [
    {
      title: "Mixing",
      content:
        "Have you recorded a bunch of stems, but have no idea where to go from there? Let me help you out, I can mix your track to sound commercial, while maintaining your artistic vision for the song.",
      examples: ["fC8QdHKArJ0", "x0377mic-iM"],
    },

    {
      title: "Mastering",
      content:
        "A good mix needs to be complemented with a good master. If all your track needs is a good master, let me ensure that your track sounds just as loud and clear in all frequency ranges across every sound system.",
      examples: ["Ae_3nTEPkEs", "f6fsVnVzx3A"],
    },

    {
      title: "Production",
      content:
        "If you're a singer, rapper or any kind of vocalist, with an artistic vision and idea but don't know where to start, you've come to the right place. After truly understanding your vision, I will try my best to produce a track that fits perfectly into your style, giving you a place to start as an artist!",
      examples: ["H7tpn3UuFmg", "hT4ID3P56wY"],
    },
  ];

  return (
    <div className={styles.container}>
      <AnimatedText type="h2" text="Work" className={styles.title} />
      {/* <p className={styles["main-content"]}>
        Lorem ipsum dolor sit amet consectetur. Dui tortor hac euismod diam
        fermentum fringilla donec proin. Aliquet etiam tristique pharetra
        malesuada nisl id enim.
      </p> */}

      <Reveal>
        <h3 style={{ textAlign: "center", fontSize: "3rem" }}>Services</h3>
      </Reveal>
      <div className={styles["item-container"]}>
        {services.map((service, index) => (
          <div key={index} className={styles["item"]}>
            <div className={styles["left"]}>
              <Reveal>
                <h3 className={styles["subtitle"]}>{service.title}</h3>
              </Reveal>
            </div>
            <div className={styles["right"]}>
              <Reveal>
                <p className={styles["content"]}>{service.content}</p>
              </Reveal>
              <Reveal>
                <p className={styles["examples"]}>Examples</p>
              </Reveal>
              <div className={styles["examples-container"]}>
                {service.examples.map((example, index) => (
                  <Reveal key={index}>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${example}?si=bAtt9JleD1y-21-w`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className={styles["example"]}
                    ></iframe>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
