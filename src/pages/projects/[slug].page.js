import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { deviceModels } from 'components/Model/deviceModels';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { cssProps, media } from 'utils/style';
import styles from './ProjectDetail.module.css';
// Import assets to match Home.js
import academicWriting from 'assets/academic-writing.jpg';
import academicWritingLarge from 'assets/academic-writing-large.jpg';
import medicalContentWriting from 'assets/medicalContentWriting.jpg';
import medicalContentWritingLarge from 'assets/medicalContentWriting-large.jpg';
import landingPage from 'assets/landingPage.jpg';
import landingPageLarge from 'assets/landingPage-large.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import productEquipement from 'assets/productEquipement.jpg';
import productEquipementLarge from 'assets/productEquipement-large.jpg';
import productEquipement2 from 'assets/volkihar-slide-1.jpg';
import productEquipement2Large from 'assets/volkihar-slide-1-large.jpg';
import seoWriting from 'assets/seo-writing.jpg';
import seoWritingLarge from 'assets/seo-writing-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import projectKatakana from 'assets/katakana-project.svg?url';


const Model = dynamic(() => import('components/Model').then(mod => mod.Model));

// Project data
const projectsData = {
  'someone-app': {
    title: 'Someone: Connection App',
    description:
      'Someone App is a community-driven platform that connects people based on shared interests and location. Users can join or create groups (local and global), find nearby events, and build meaningful local or global connections.',
    fullDescription:
      'Someone App empowers users to foster meaningful relationships by connecting them through shared interests and proximity. The app features group creation, event discovery, and real-time chat, all designed with a user-friendly interface. Built with a focus on privacy and community engagement, it supports both local and global interactions, making it ideal for building friendships or professional networks.',
    model: {
      type: 'phone',
      alt: 'Someone App interface',
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
    },
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Studio','Cloud Functions', 'WebRTC','webSockets','AiAgent'],
    features: [
      'Group creation and management',
      'Real-time event discovery',
      'Secure chat functionality',
      'Location-based recommendations',
    ],
    links: [
      { title: 'Visit Website', url: 'https://someoneapp.me/?i=1' },
      { title: 'Download App', url: 'https://play.google.com/store/apps/details?id=com.network.someone' },
    ],
  },
  'admin-panel': {
    title: 'Fuel Hub Admin Panel',
    description:
      'Fuel Hub Admin Panel is a real-time fuel price management system that allows admins to update station prices, monitor station status, and send alerts, ensuring seamless communication and control across locations.',
    fullDescription:
      'The Fuel Hub Admin Panel is a robust web-based dashboard for managing fuel stations. Admins can update fuel prices in real-time, monitor station operations, and send instant alerts to users. The panel features a responsive design, intuitive navigation, and secure authentication, making it a powerful tool for fuel station management.',
    model: {
      type: 'laptop',
      alt: 'Fuel Hub Admin Panel interface',
      textures: [
        {
          srcSet: [medicalContentWriting, medicalContentWritingLarge],
          placeholder: sliceTexturePlaceholder,
        },
      ],
    },
    techStack: ['React', 'Node.js', 'Express.js', 'Firebase', 'VS Code'],
    features: [
      'Real-time price updates',
      'Station status monitoring',
      'Alert system for users',
      'Secure admin authentication',
    ],
    links: [
      { title: 'View Demo', url: 'https://app.fuelhub.us/' },
      { title: 'Documentation', url: 'https://docs.fuelhub.example.com' },
    ],
  },
  'yatra-hikes': {
    title: 'YatraHikes: Landing Page',
    description:
      'YatraHikes is a trekking community and booking platform organizing Himalayan treks across Uttarakhand, Himachal, and Kashmir—offering curated itineraries, local guides, and authentic mountain experiences for adventurers and travelers.',
    fullDescription:
      'YatraHikes’ landing page is designed to attract adventure enthusiasts with stunning visuals and clear calls-to-action. The platform allows users to explore trek itineraries, book guided tours, and connect with a community of trekkers. Built with performance and SEO in mind, the page ensures fast load times and high search engine visibility.',
    model: {
      type: 'laptop',
      alt: 'YatraHikes landing page',
      textures: [
        {
          srcSet: [landingPage, landingPageLarge],
          placeholder: sliceTexturePlaceholder,
        },
      ],
    },
    techStack: ['Next.js', 'React', 'JavaScript', 'VS Code', 'Git'],
    features: [
      'Interactive trek itineraries',
      'Booking system integration',
      'Community forums',
      'SEO-optimized content',
    ],
    links: [
      { title: 'Visit Website', url: 'https://www.yatrahikes.com' },
      { title: 'Book Trek', url: 'https://www.yatrahikes.com' },
    ],
  },
  'teenlink': {
    title: 'Teenlink',
    description:
      'TeenLink is a dynamic social platform where teens connect through shared interests, join local or global groups, and discover events, fostering meaningful friendships and real-world interactions in a safe space.',
    fullDescription:
      'TeenLink is a mobile-first social platform tailored for teenagers. It offers features like interest-based group chats, event discovery, and safety-focused moderation tools. The app is designed to encourage positive interactions while ensuring user privacy and security, making it a trusted space for young users to connect.',
    model: {
      type: 'phone',
      alt: 'TeenLink app interface',
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
    },
    techStack: ['Kotlin', 'Firebase', 'JavaScript', 'Android Studio', 'Node.js', 'webRTC', 'socket.io'],
    features: [
      'Interest-based group chats',
      'Event discovery and RSVPs',
      'Safety moderation tools',
      'User privacy controls',
    ],
    links: [
      { title: 'Download App', url: 'https://play.google.com/store/teenlink' },
      { title: 'Privacy Policy', url: 'https://teenlink.example.com/privacy' },
    ],
  },
  'fuelhub': {
    title: 'FuelHub',
    description:
      'FuelHub App helps users track real-time fuel prices, set custom alerts, and find nearby stations. It ensures smarter fuel decisions with location-based updates and personalized notifications for every user.',
    fullDescription:
      'FuelHub is a user-centric mobile app that simplifies fuel management. Users can monitor real-time fuel prices, locate nearby stations, and receive personalized alerts based on their preferences. The app integrates geolocation services and push notifications, providing a seamless experience for drivers looking to optimize their fuel expenses.',
    model: {
      type: 'phone',
      alt: 'FuelHub app interface',
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
    },
    techStack: ['Flutter', 'Firebase', 'Dart', 'Google Cloud Studio', 'Cloud Functions','Node.js'],
    features: [
      'Real-time fuel price tracking',
      'Custom alert settings',
      'Nearby station locator',
      'Geolocation integration',
    ],
    links: [
      { title: 'App Store', url: 'https://apps.apple.com/fuelhub' },
      { title: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.agm.fuel_hub' },
    ],
  },
  'seo-writing': {
    title: 'SEO Writing',
    description:
      'I specialize in creating SEO-friendly medical content that helps businesses rank higher in search engine results. With my knowledge of keyword research and on-page optimization, I help clients attract more website traffic and generate more leads.',
    fullDescription:
      'My SEO writing services focus on creating high-quality medical content optimized for search engines. From blog posts to website copy, I use advanced keyword research and on-page SEO techniques to boost visibility and engagement. Each piece is crafted to be informative, engaging, and aligned with client goals.',
    model: {
      type: 'laptop',
      alt: 'SEO writing content',
      textures: [
        {
          srcSet: [seoWriting, seoWritingLarge],
          placeholder: sliceTexturePlaceholder,
        },
      ],
    },
    techStack: ['Python', 'VS Code', 'Git', 'SEO Tools', 'WordPress'],
    features: [
      'Keyword-optimized content',
      'On-page SEO techniques',
      'Analytics-driven strategy',
      'Engaging medical copy',
    ],
    links: [
      { title: 'Portfolio', url: '/portfolio/seo' },
      { title: 'Hire Me', url: '/contact' },
    ],
  },
};

export const ProjectDetail = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const svgOpacity = theme.themeId === 'light' ? 0.7 : 1;

  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;


  const { slug } = router.query; // Use slug instead of projectId
  const renderKatakana = (device, visible) => (
    <svg
      aria-hidden="true"
      width="750"
      height="137"
      viewBox="0 0 750 137"
      data-visible={visible}
      data-light={theme.themeId === 'light'}
      style={cssProps({ opacity: svgOpacity })}
      className={styles.svg}
      data-device={device}
    >
      <use href={`${projectKatakana}#katakana-project`} />
    </svg>
  );
  useEffect(() => {
    console.log("Router ready:", router.isReady);
    console.log("Raw slug:", router.query.slug);
    
    if (router.isReady && slug) {
      // Normalize slug by removing trailing slash and ensuring lowercase
      const normalizedSlug = slug.replace(/\/+$/, '').toLowerCase();
      console.log('Normalized slug:', normalizedSlug);
      
      if (projectsData[normalizedSlug]) {
        setProject(projectsData[normalizedSlug]);
        setTimeout(() => setVisible(true), 200);
      } else {
        setProject(null);
      }
    }
  }, [router.isReady, slug]);

  if (!router.isReady) {
    return (
      <Section className={styles.loading}>
        <Text>Loading...</Text>
      </Section>
    );
  }

  if (!project) {
    return (
      <Section className={styles.error}>
        <Heading level={3}>Project Not Found</Heading>
        <Text>The project you are looking for does not exist.</Text>
        <Button
          secondary
          iconHoverShift
          className={styles.backButton}
          href="/"
          iconEnd="arrowLeft"
        >
          Back to Home
        </Button>
      </Section>
    );
  }

  return (
    <>
      <Section className={styles.projectDetail}>
        <Transition in={visible} timeout={0}>
          {visible => (
            <>
              <div className={styles.headerContainer} data-visible={visible}>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.backButton}
                  href="/"
                  iconEnd="arrowLeft"
                  data-visible={visible}
                >
                  Back to Projects
                </Button>
                <Heading
                  className={styles.projectTitle}
                  level={2}
                  as="h1"
                  data-visible={visible}
                >
                  {project.title}
                </Heading>
              </div>

              <div className={styles.modelContainer} data-visible={visible}>
                {project.model.type === 'laptop' && (
                  <>
                    {renderKatakana('laptop', visible)}
                    <div className={styles.model} data-device="laptop">
                      <Model
                        alt={project.model.alt}
                        cameraPosition={{ x: 0, y: 0, z: 8 }}
                        showDelay={300}
                        show={visible}
                        models={[
                          {
                            ...deviceModels.laptop,
                            texture: {
                              ...project.model.textures[0],
                              sizes: laptopSizes,
                            },
                          },
                        ]}
                      />
                    </div>
                  </>
                )}
                {project.model.type === 'phone' && (
                  <>
                    {renderKatakana('phone', visible)}
                    <div className={styles.model} data-device="phone">
                      <Model
                        alt={project.model.alt}
                        cameraPosition={{ x: 0, y: 0, z: 11.5 }}
                        showDelay={300}
                        show={visible}
                        models={[
                          {
                            ...deviceModels.phone,
                            position: { x: -0.6, y: 1.1, z: 0 },
                            texture: {
                              ...project.model.textures[0],
                              sizes: phoneSizes,
                            },
                          },
                          project.model.textures.length > 1 && {
                            ...deviceModels.phone,
                            position: { x: 0.6, y: -0.5, z: 0.3 },
                            texture: {
                              ...project.model.textures[1],
                              sizes: phoneSizes,
                            },
                          },
                        ].filter(Boolean)}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className={styles.contentSection} data-visible={visible}>
                <div className={styles.descriptionSection}>
                  <Heading level={3} as="h2" data-visible={visible}>
                    Description
                  </Heading>
                  <Text className={styles.paragraph} data-visible={visible}>
                    {project.fullDescription}
                  </Text>
                </div>

                <div className={styles.sidebar}>
                  <div className={styles.techSection}>
                    <Heading level={3} as="h2" data-visible={visible}>
                      Technologies
                    </Heading>
                    <div className={styles.techList} data-visible={visible}>
                      {project.techStack.map((tech, index) => (
                        <div key={index} className={styles.techItem}>
                          <Text>{tech}</Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.featuresSection}>
                    <Heading level={3} as="h2" data-visible={visible}>
                      Key Features
                    </Heading>
                    <ul className={styles.featuresList} data-visible={visible}>
                      {project.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <Text>{feature}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.linksSection} data-visible={visible}>
                <Heading level={3} as="h2" data-visible={visible}>
                  Project Links
                </Heading>
                <div className={styles.linkButtons}>
                  {project.links.map((link, index) => (
                    <Button
                      key={index}
                      href={link.url}
                      iconHoverShift
                      iconEnd="arrowRight"
                      className={styles.linkButton}
                      target="_blank"
                      data-visible={visible}
                    >
                      {link.title}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </Transition>
      </Section>
      <Footer />
    </>
  );
};

export default ProjectDetail;