import { PDFViewer } from 'components/PDFViewer';
import { Post } from 'layouts/Post';
import styles from './Resume.module.css';

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <Post
        title="Resume"
        href="https://raw.githubusercontent.com/Pratham-Verma7/Pratham-s-portfolio/main/src/assets/Prathan's%20Resume.pdf"
      >
        <PDFViewer resume={true} pdfLink="https://raw.githubusercontent.com/Pratham-Verma7/Pratham-s-portfolio/main/src/assets/Prathan's%20Resume.pdf" />
      </Post>
    </div>
  );
};
