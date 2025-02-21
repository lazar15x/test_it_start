import CardSeminar from '../../components/CardSeminar/CardSeminar';
import styles from './styles.module.css';
import useSeminars from './useSeminars';

const Home = () => {
  const { seminars, error, isLoading, setSeminars } = useSeminars();
  const Seminars = seminars.map(item => (
    <CardSeminar key={item.id} setData={setSeminars} {...item} />
  ));

  if (error) {
    return <h1 className={styles.error}>{error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <>
          <div className={styles.home}>
            <h1>Семинары</h1>
            <div className={styles.content}>{Seminars}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
