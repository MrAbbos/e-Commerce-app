import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Header() {
  return (
    <section id="header">
      <div className="header">
        <div className="container">
          <div className="links-top flex space-a">
            <div className="box-1">
              <div className="social-media-links flex space-a">
                <button>Facebook</button>
                <button>Telegram</button>
                <button>Blog</button>
                <button>Youtube</button>
              </div>
            </div>
            <div className="box-2 flex space-a">
              <div className="login-bucket">
                <button>LogIn</button>/
                <button>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          </div>
          <div className="navbar">
            <div className="flex space-b">
              <div className="box-1">Logo</div>
              <div className="box-2 text-center">
                <ul className="flex space-a">
                  <li>
                    <button>Home</button>
                  </li>
                  <li>
                    <button>Collection</button>
                  </li>
                  <li>
                    <button>About</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
