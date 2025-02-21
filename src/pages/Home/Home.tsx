import CardSeminar from '../../components/CardSeminar/CardSeminar';
import styles from './styles.module.css';
import useSeminars from './useSeminars';

const Home = () => {
  const { seminars, error, isLoading, setSeminars } = useSeminars();

  if (error) {
    return <h2 className={styles.error}>{error}</h2>;
  }

  return (
    <>
      {isLoading ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : (
        <>
          <div className={styles.home}>
            <h1>Семинары</h1>
            <div className={styles.content}>
              {seminars.map(item => (
                <CardSeminar key={item.id} setData={setSeminars} {...item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
