import { classes } from 'utils/style';
import styles from 'layouts/Home/Home.module.css';
import { Heading } from 'components/Heading';
import { Text } from 'components/Text';
import React from 'react';
import {
    FaJava, FaPython, FaReact, FaNode, FaDatabase,
    FaGit, FaGithub, FaCode, FaFire, FaServer, FaJs
} from 'react-icons/fa';
import { DiDart, DiJavascript, DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiAndroidstudio, SiGooglecloud, SiFlutter, SiExpress } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi';
import { BsLightningCharge } from 'react-icons/bs';

// Define skill categories with proper icons
const skillsData = [
    {
        category: 'Languages',
        items: [
            { name: 'Dart', icon: <DiDart size={36} /> },
            { name: 'JavaScript', icon: <DiJavascript size={36} /> },
            { name: 'TypeScript', icon: <SiTypescript size={36} /> },
            { name: 'Python', icon: <FaPython size={36} /> },
            { name: 'Java', icon: <FaJava size={36} /> },
        ],
    },
    {
        category: 'Frameworks',
        items: [
            { name: 'Flutter', icon: <SiFlutter size={36} /> },
            { name: 'Firebase', icon: <FaFire size={36} /> },
            { name: 'Node.js', icon: <FaNode size={36} /> },
            { name: 'Express.js', icon: <SiExpress size={36} /> },
            { name: 'React Native', icon: <FaReact size={36} /> },
            { name: 'React', icon: <FaReact size={36} /> },
            { name: 'Next.js', icon: <SiNextdotjs size={36} /> },
            { name: 'TailwindCSS', icon: <SiTailwindcss size={36} /> },
        ],
    },
    {
        category: 'Databases',
        items: [
            { name: 'MongoDB', icon: <DiMongodb size={36} /> },
            { name: 'PostgreSQL', icon: <DiPostgresql size={36} /> },
            { name: 'Firebase', icon: <FaFire size={36} /> },
        ],
    },
    {
        category: 'Tools',
        items: [
            { name: 'Git', icon: <FaGit size={36} /> },
            { name: 'Groq', icon: <BsLightningCharge size={36} /> },
            { name: 'GitHub', icon: <FaGithub size={36} /> },
            { name: 'Android Studio', icon: <SiAndroidstudio size={36} /> },
            { name: 'VS Code', icon: <SiVisualstudiocode size={36} /> },
            { name: 'Google Cloud', icon: <SiGooglecloud size={36} /> },
        ],
    },
];

export const SkillsSection = ({ id, sectionRef, visible }) => {
    const titleId = `${id}-title`;

    return (
        <section
            id={id}
            ref={sectionRef}
            className={classes(styles.skills, { [styles.visible]: visible })}
            aria-labelledby={titleId}
        >
            <Heading level={3} id={titleId} className={styles.skillsTitle}>
                My Skills
            </Heading>
            <div className={styles.skillsGrid}>
                {skillsData.map((category, index) => (
                    <div key={index} className={styles.skillCategory}>
                        <Heading level={4} className={styles.categoryTitle}>
                            {category.category}
                        </Heading>
                        <div className={styles.skillList}>
                            {category.items.map((skill, idx) => (
                                <div key={idx} className={styles.skillItem}>
                                    <div className={styles.skillIcon}>{skill.icon}</div>
                                    <Text className={styles.skillName}>{skill.name}</Text>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}; 