import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { CLOTHS_TYPE_IDS } from '../../consts';

export const ClothesMenu = () => {
  return (
    <>
      <div className="clothesMenu_container">
        <h2>Co za oblečení hledáš?</h2>

        <div className="clothesMenu">
          {/* Kabát */}
          <Link
            className="clothesMenu__item"
            to={`/vyhledat-odev/${CLOTHS_TYPE_IDS.COAT}`}
          >
            <svg
              className="clothesMenu__image clothesMenu__image--pink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M38.6 28.06 32.17 15a.93.93 0 0 1-.05-.1 2.88 2.88 0 0 0-.7-.9 3.48 3.48 0 0 0-2.42-.92h-2.21a1.11 1.11 0 0 0-.65.22l-2.3 1.7-1.58-1.52a1.06 1.06 0 0 0-.49-.26 1 1 0 0 0-.56-.17H19a3.5 3.5 0 0 0-2.05.66 2.81 2.81 0 0 0-1.07 1.17L9.4 28.06a1.06 1.06 0 0 0 .49 1.44l3.16 1.57a1.09 1.09 0 0 0 1.4-.4L15.5 29v2.46a3.51 3.51 0 0 0 3.5 3.46h10a3.5 3.5 0 0 0 3.5-3.5V29l1 1.64a1.09 1.09 0 0 0 1.4.41l3.16-1.57a1.06 1.06 0 0 0 .49-1.44ZM19 15.24h1.93l8 7.63h-2.39l-7.86-7.55a1.49 1.49 0 0 1 .32-.08Zm-2.42 5.56a1.09 1.09 0 0 0-1.08 1.08v3l-2.37 3.85-1.32-.73 5.47-11 6.15 5.9h-5.77v-1a1.08 1.08 0 0 0-1.08-1.1Zm13.8 10.62A1.35 1.35 0 0 1 29 32.76H19a1.36 1.36 0 0 1-1.35-1.34v-3.15h12.73Zm0-5.31H17.66V25h12.7v.8a.88.88 0 0 0 0 .16v.12Zm4.49 2.58-2.35-3.81V24a1.07 1.07 0 0 0-.23-.65 1 1 0 0 0-.3-.53l-6.57-6.31 1.73-1.31H29a1.3 1.3 0 0 1 .91.37l.06.05a.87.87 0 0 1 .17.21l6 12.09Z" />
            </svg>
            <p className="clothesMenu__text clothesMenu__text--pink">Kabát</p>
          </Link>

          {/* Oblek */}
          <Link
            className="clothesMenu__item"
            to={`/vyhledat-odev/${CLOTHS_TYPE_IDS.SUIT}`}
          >
            <svg
              className="clothesMenu__image clothesMenu__image--white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M39.45 28.29 32.64 14.5v-.1a2.94 2.94 0 0 0-.74-.94 3.68 3.68 0 0 0-2.51-1H27a1.12 1.12 0 0 0-.68.23L24 14.39l-2.27-1.71a1.12 1.12 0 0 0-.68-.23h-2.33a3.69 3.69 0 0 0-2.17.7 3 3 0 0 0-1.13 1.23L8.55 28.29a1.19 1.19 0 0 0-.06.87 1.15 1.15 0 0 0 .58.66l3.35 1.66a1.15 1.15 0 0 0 1.48-.43l1.1-1.81v2.6a3.71 3.71 0 0 0 3.71 3.71h10.62A3.71 3.71 0 0 0 33 31.84v-2.53l1.07 1.74a1.15 1.15 0 0 0 1.48.43l3.35-1.66a1.15 1.15 0 0 0 .58-.66 1.19 1.19 0 0 0-.03-.87Zm-4 .68-2.49-4v-.88a1.14 1.14 0 1 0-2.28 0v1.89a1.11 1.11 0 0 0 0 .17v5.73a1.42 1.42 0 0 1-1.42 1.42H18.72a1.41 1.41 0 0 1-1.42-1.42v-7.83a1.15 1.15 0 1 0-2.29 0v.84L12.5 29l-1.39-.69 6.36-12.91a.69.69 0 0 1 .28-.3l.12-.08a1.44 1.44 0 0 1 .85-.28h1.94l2.65 2a1.14 1.14 0 0 0 1.38 0l2.65-2h2a1.46 1.46 0 0 1 1 .38s0 0 .05.05a.66.66 0 0 1 .18.23l6.32 12.8Zm-13-7.77A1.52 1.52 0 1 0 24 19.68a1.52 1.52 0 0 0-1.52 1.52Zm0 6.47A1.52 1.52 0 1 0 24 26.15a1.53 1.53 0 0 0-1.52 1.52Z" />
            </svg>
            <p className="clothesMenu__text clothesMenu__text--white">Oblek</p>
          </Link>

          {/* Letní oblečení */}
          <Link
            className="clothesMenu__item"
            to={`/vyhledat-odev/${CLOTHS_TYPE_IDS.SUMMER_CLOTHES}`}
          >
            <svg
              className="clothesMenu__image clothesMenu__image--pink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="m36.91 30.41-5.18-8a9.65 9.65 0 0 0 1.86-4.5 4.21 4.21 0 0 0 .12-1v-2.57c0-2.75-2.73-5-6.1-5h-1.54a1.58 1.58 0 0 0-.56.13 1.27 1.27 0 0 0-.7.93c-.45 2.61-3.74 4.12-9.28 4.26a1.24 1.24 0 0 0-1.22 1.25v1a4.28 4.28 0 0 0 0 .6 9.73 9.73 0 0 0 1.91 4.9l-5.19 8a1.26 1.26 0 0 0-.15 1c.57 4.15 6.13 7.25 13.06 7.25s12.32-3 13-7.07a1.27 1.27 0 0 0-.03-1.18ZM24 36.15c-5.91 0-9.92-2.43-10.52-4.81l5.4-8.34a1.25 1.25 0 0 0-.14-1.53 7.17 7.17 0 0 1-1.89-4.23.17.17 0 0 0 0-.07v-.07c3.71-.25 8.78-1.33 10.18-5.26h.6c1.95 0 3.59 1.14 3.59 2.49v2.58a2.12 2.12 0 0 1-.05.44.94.94 0 0 0 0 .16 7.09 7.09 0 0 1-1.86 4 1.25 1.25 0 0 0-.19 1.49l5.39 8.31c-.58 2.39-4.59 4.84-10.51 4.84Zm1.77-13.9a4 4 0 0 1-1.76.37 4 4 0 0 1-1.77-.37 1.25 1.25 0 0 0-1.17 2.22 6.5 6.5 0 0 0 2.94.65 6.42 6.42 0 0 0 2.93-.65 1.25 1.25 0 1 0-1.17-2.22Z" />
            </svg>
            <p className="clothesMenu__text clothesMenu__text--pink">
              Letní oblečení
            </p>
          </Link>

          {/* Pracovní oblečení */}
          <Link
            className="clothesMenu__item"
            to={`/vyhledat-odev/${CLOTHS_TYPE_IDS.WORK_CLOTHES}`}
          >
            <svg
              className="clothesMenu__image clothesMenu__image--white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M33.63 20a1.62 1.62 0 0 0 0-.21 37 37 0 0 0-1.33-9.42A1.31 1.31 0 0 0 31 9.4H17a1.31 1.31 0 0 0-1.26 1 36.92 36.92 0 0 0-1.34 9.42 1.72 1.72 0 0 1 0 .33V37.3a1.32 1.32 0 0 0 1.32 1.32h4.68a1.31 1.31 0 0 0 1.31-1.19l1.64-17.66h1.3l1.64 17.66a1.31 1.31 0 0 0 1.31 1.17h4.72a1.32 1.32 0 0 0 1.32-1.32v-17.2l-.01-.08Zm-3.32-6.64A8.51 8.51 0 0 1 29 12h1q.16.62.31 1.35ZM19 12a8.21 8.21 0 0 1-1.29 1.28c.09-.47.19-.9.28-1.28Zm12 24h-2.2l-1.64-17.69a1.32 1.32 0 0 0-1.31-1.19h-3.7a1.32 1.32 0 0 0-1.31 1.19L19.2 36H17V20.33a4.12 4.12 0 0 0 0-.51 34.11 34.11 0 0 1 .33-4.32.85.85 0 0 0 .31-.09 9.36 9.36 0 0 0 3.27-3 .93.93 0 0 0 .13-.35h5.86a.77.77 0 0 0 .12.35 9.57 9.57 0 0 0 3.27 3 .8.8 0 0 0 .36.09 36.07 36.07 0 0 1 .35 4.32V36Z" />
            </svg>
            <p className="clothesMenu__text clothesMenu__text--white">
              Pracovní oblečení
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
