// import { SiDart, SiJavascript, SiPython, SiJava, SiFlutter, SiFirebase, SiNodedotjs, SiExpress, SiReact, SiNextdotjs, SiGit, SiGithub, SiAndroidstudio, SiVisualstudiocode, SiGooglecloud } from 'react-icons/si';
// import { FaBrain } from 'react-icons/fa'; // Placeholder for Groq
// import { classes } from 'utils/style';
// import styles from 'layouts/Home/Home.module.css';
// import { Heading } from 'components/Heading';
// import { Text } from 'components/Text';
// const skillsData = [
//   {
//     category: 'Languages',
//     items: [
//       { name: 'Dart', icon: SiDart },
//       { name: 'JavaScript', icon: SiJavascript },
//       { name: 'Python', icon: SiPython },
//       { name: 'Java', icon: SiJava },
//     ],
//   },
//   {
//     category: 'Frameworks',
//     items: [
//       { name: 'Flutter', icon: SiFlutter },
//       { name: 'Firebase', icon: SiFirebase },
//       { name: 'Node.js', icon: SiNodedotjs },
//       { name: 'Express.js', icon: SiExpress },
//       { name: 'React Native', icon: SiReact },
//       { name: 'React', icon: SiReact },
//       { name: 'Next.js', icon: SiNextdotjs },
//     ],
//   },
//   {
//     category: 'Tools',
//     items: [
//       { name: 'Git', icon: SiGit },
//       { name: 'Groq', icon: FaBrain }, // Placeholder
//       { name: 'GitHub', icon: SiGithub },
//       { name: 'Android Studio', icon: SiAndroidstudio },
//       { name: 'VS Code', icon: SiVisualstudiocode },
//       { name: 'Google Cloud Studio', icon: SiGooglecloud },
//     ],
//   },
// ];

// export const Skills = ({ id, sectionRef, visible }) => {
//   const titleId = `${id}-title`;

//   return (
//     <section
//       id={id}
//       ref={sectionRef}
//       className={classes(styles.section, styles.skills, { [styles.visible]: visible })}
//       aria-labelledby={titleId}
//     >
//       <Heading level={3} id={titleId} className={styles.skillsTitle}>
//         My Skills
//       </Heading>
//       <div className={styles.skillsGrid}>
//         {skillsData.map((category, index) => (
//           <div key={index} className={styles.skillCategory}>
//             <Heading level={4} className={styles.categoryTitle}>
//               {category.category}
//             </Heading>
//             <div className={styles.skillList}>
//               {category.items.map((skill, idx) => {
//                 const Icon = skill.icon;
//                 return (
//                   <div key={idx} className={styles.skillItem}>
//                     <Icon size={40} className={styles.skillIcon} />
//                     <Text className={styles.skillName}>{skill.name}</Text>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };