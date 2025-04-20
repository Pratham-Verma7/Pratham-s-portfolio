import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import medicalContentWriting from 'assets/medicalContentWriting.jpg';
import medicalContentWritingLarge from 'assets/medicalContentWriting-large.jpg';
import landingPage from 'assets/landingPage.jpg';
import landingPageLarge from 'assets/landingPage-large.jpg';
import productEquipement from 'assets/productEquipement.jpg';
import productEquipementLarge from 'assets/productEquipement-large.jpg';
import productEquipement2 from 'assets/volkihar-slide-1.jpg';
import productEquipement2Large from 'assets/volkihar-slide-1-large.jpg';
import procedurePage from 'assets/procedurePage.jpg';
import procedurePageLarge from 'assets/procedurePage-large.jpg';
import technicalWriting from 'assets/technical-writing.jpg';
import technicalWritingLarge from 'assets/technical-writing-large.jpg';
import healthCareProfessional from 'assets/healthCareProfessional.jpg';
import healthCareProfessionalLarge from 'assets/healthCareProfessional-large.jpg';
import academicWritingLarge from 'assets/academic-writing-large.jpg';
import academicWriting from 'assets/academic-writing.jpg';
import seoWriting from 'assets/seo-writing.jpg';
import seoWritingLarge from 'assets/seo-writing-large.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { Text } from 'components/Text';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'components/Link';
import styles from './Home.module.css';
import { useRouter } from 'next/router';

const disciplines = [
  'Flutter Developer',
  '10+ App and Website Develop',
  'Full-Stack Developer',
  'Mobile App Developer',
  'Technical Writer',
  'Open Source Contributor',
];

const otherServices = [
  { service: 'Case Study', link: '/articles/?0=Case+Study' },
  { service: 'Procedure Page', link: '/articles/?0=Procedure+Page' },
  { service: 'Technical Writing', link: '/articles/?0=Technical+Writing' },
  { service: 'Blog', link: '/articles/?0=Blog' },
  { service: 'Web Page Content', link: '/articles/?0=Web+Page+Content' },
  { service: 'Newsletter', link: '/articles/?0=Newsletter' },
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const router = useRouter();
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const about = useRef();
  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      about,
      
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer + Full Stack"
        description="Design portfolio of Pratham Verma, a developer and full-stack engineer with expertise in Flutter, React, and technical writing. Explore my projects and services."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Someone:- connection app" 
        description="Someone App is a community-driven platform that connects people based on shared interests and location. Users can join or create groups(local and global), find nearby events, and build meaningful local or global connections."
        buttonText="View App"
        onButtonClick={() => handleProjectClick('someone-app')}
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [academicWriting, academicWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
            {
              srcSet: [academicWriting, academicWriting],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Admin panel"
        description="Fuel Hub Admin Panel is a real-time fuel price management system that allows admins to update station prices, monitor station status, and send alerts, ensuring seamless communication and control across locations."
        buttonText="View panel"
        onButtonClick={() => handleProjectClick('admin-panel')}
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [medicalContentWriting, medicalContentWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="YatraHikes:- Landing Page"
        description="YatraHikes is a trekking community and booking platform organizing Himalayan treks across Uttarakhand, Himachal, and Kashmir—offering curated itineraries, local guides, and authentic mountain experiences for adventurers and travelers."
        buttonText="View Page"
        onButtonClick={() => handleProjectClick('yatra-hikes')}
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [landingPage, landingPageLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Teenlink"
        description="TeenLink is a dynamic social platform where teens connect through shared interests, join local or global groups, and discover events, fostering meaningful friendships and real-world interactions in a safe space"
        buttonText="View App"
        onButtonClick={() => handleProjectClick('Teenlink')}
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="FuelHub"
        description="FuelHub App helps users track real-time fuel prices, set custom alerts, and find nearby stations. It ensures smarter fuel decisions with location-based updates and personalized notifications for every user."
        buttonText="View App"
        onButtonClick={() => handleProjectClick('fuelhub')}
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [productEquipement, productEquipementLarge],
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: [productEquipement2, productEquipement2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="SEO Writing"
        description="I specialize in creating SEO-friendly medical content that helps businesses rank higher in search engine results. With my knowledge of keyword research and on-page optimization, I help clients attract more website traffic and generate more leads."
        buttonText="View Content"
        onButtonClick={() => handleProjectClick('seo-writing')}
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [seoWriting, seoWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Heading className={styles.title} level={3}>
        Other Service&#39;s
      </Heading>
      <div className={styles.buttonContainer}>
        <Text className={styles.anchorTag}>Healthcare professional</Text>
        {otherServices.map((data, index) => (
          <div className={styles.linkTag} key={index}>
            <Link href={data.link}>{data.service}</Link>
          </div>
        ))}
        <Text className={styles.anchorTag}>Editing and Proofreading</Text>
      </div>

      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <Footer />
    </div>
  );
};
