import IconInfo from "./components/IconInfo";
import styles from "./features.module.css";
import trust from "../../public/icons/trust.svg";
import filters from "../../public/icons/filters.svg";
import list from "../../public/icons/list.svg";
import info from "../../public/icons/info.svg";
import house from "../../public/icons/house.svg";
import qr from "../../public/icons/qr.svg";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Explore the most attractive areas in Kyiv neighborhoods to buy a home
        </h2>
        <div className={styles.paragraphContainer}>
          <p>
            We are very proud of the service we provide. Discover the hottest
            communities available in our portfolio. Look through the most
            popular areas. Our locations and services prove we are the best.
          </p>
          <p>
            Kyiv is the capital and most populous city of Ukraine.The city’s
            name is said to derive from the name of Kyi, one of its four
            legendary founders. We rank amongst the Top 6 agencies in the world.
          </p>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <IconInfo icon={trust} text="Trusted and verified property listings." />
        <IconInfo
          icon={filters}
          text="Personalized filters
that make property
search easier."
        />
        <IconInfo
          icon={list}
          text="Complete info on
trending properties
listed."
        />
        <IconInfo
          icon={info}
          text="Details info about
the property that
are in wishlist."
        />
        <IconInfo
          icon={house}
          text="Home plan layouts
for virtual tours of
every house."
        />
        <IconInfo
          icon={qr}
          text="QR scan code for
retrieving property
details."
        />
        <div className={styles.purpleContainer}>
          <p>
            With tons of benefits for customers. Go True People Wall is the
            ultimate place where a buyer will search for properties online.
          </p>
        </div>
      </div>
    </div>
  );
}
