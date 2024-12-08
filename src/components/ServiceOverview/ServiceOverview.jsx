import styles from "./ServiceOverview.module.css";
import Title from "../Title/Title";
import ServiceList from "./ServiceList/ServiceList";


export default function ServiceOverview({ sectionData = [] }) {

  return (
    <section>
      <Title sectionId={1} />
      <div className={styles.serviceOverviewContainer}>
        <ServiceList/>
      </div>
    </section>
  );
}