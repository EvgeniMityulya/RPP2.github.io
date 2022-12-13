import logo from './logo.svg';
import './App.css';
import './style.css';

import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import useLocalStorage from './hooks/use-localstorage';

function App() {
  const {t} = useTranslation();
  const [language, setLanguaege] = useLocalStorage('language', 'ru')

  const handleLanguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguaege('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguaege('en');
    }
  }

  return (
    <div className="App">

    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div class="global-navigation">
			<div class="dev">
				<img src="./images/evgexaxzc.png" width="100%" height="auto" alt="" />
				<a href="https://github.com/evgexaxzc">evgexaxzc</a>
			</div>
			<div class="dev">
				<img src="./images/T4RWERKA.jpg" width="100%" height="auto" alt="" />
				<a href="https://github.com/T4RWERKA">T4RWERKA</a>	
			</div>
			<div class="dev">
				<img src="./images/evgexaxzc.png" width="100%" height="auto" alt="" />
				<a href="hhttps://github.com/MenterCOX">MenterCOX</a>
			</div>
		</div>
		<div class="main-container">
			<div class="page-background"></div>
			<div class="page-container">
				<div class="page-header">
					<nav class="local-navigation">
						<a href="">
							<span id="title">{t('main')}</span>
						</a>
						<a href="list.html">
							<span id="list">{t('authors list')}</span>
						</a>
					</nav>
				</div>
				<div class="page">
					<main class="page-main">
						<form>
							<fieldset class="main-fieldset">
								<legend id="langs">{t('choose language')}:</legend>
                <button onClick={handleLanguageChange}>
                  {t('change to')}{' '} 
                  {language === 'ru' ? t('english') : t('russian')}
                </button>
								{/* <label>
									<input type="radio" name="lang" value="ru" id="lang-ru" checked
                    onChange={handleLanguageChange}/> {t('russian')} 
                </label>
								<label>
									<input type="radio" name="lang" value="en" id="lang-en" 
                    onChange={handleLanguageChange}/> {t('english')} 
                </label> */}
							</fieldset>
						</form>
						<p id="intro">{t('welcome')}</p>
						<h2>
							<span id="day">{t('figure of the day')}</span>
						</h2>
						<div class="featured">
							<img src="./images/bykov.jpg" width="30%" height="auto%" alt="" />
							<p>{t('vasily bykov 1')} <a href="https://ru.wikipedia.org/wiki/Ушачский_район">{t('ushachsky district')}</a> {t('vitebsk region')}, <a href="https://ru.wikipedia.org/wiki/Боровляны_(Минский_район)">{t('borovlyany')}</a> — {t('Soviet')} </p>
							<a href="bykov.html" class="wds-button" id="more">{t('Read more')} </a>
						</div>
						<h2>
							<span id="also">{t('See also')}</span>
						</h2>
						<div class="see-also">
							<ul>
							<li>
								<a href=".html"><span id="Автор 1">Автор 1</span></a>
							</li>
							<li>
								<a href=".html"><span id="Автор 2">Автор 2</span></a>
							</li>
							<li>
								<a href=".html"><span id="Автор 3">Автор 3</span></a>
							</li>
							<li>
								<a href=".html"><span id="Автор 4">Автор 4</span></a>
							</li>
							<li>
								<a href=".html"><span id="Автор 5">Автор 5</span></a>
							</li>
						</ul>
							<ul>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 1»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 2»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 3»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 4»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 5»</a>
								</li>
							</ul>
							<ul>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 6»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 7»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 8»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 9»</a>
								</li>
								<li>
									<a href="http://be.wikipedia.org/wiki/Произведение1">«Произведение 10»</a>
								</li>
							</ul>
						</div>
						<h2>
							<span id="workers">{t('Creators')}</span>
						</h2>
						<p id="support">{t('worked on the site')}</p>
						<div class="license" id="license">{t('materials are taken')}</div>
					</main>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
