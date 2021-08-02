import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './LanguageSwitcher.scss';
import { supportedLanguages } from '../../locales/locales';

class LanguageSwitcher extends React.Component {
  updateDefaultLanguage(defaultLanguage) {
    // console.log('update language to ', defaultLanguage)
    window.localStorage.setItem('language', defaultLanguage);
  }

  render() {
    // Compute current language from URL directly
    return (
      <div className={'Container'}>
        {this.props.availableLanguages.map((availableLanguage) => {
          // alert(this.props.currentUrl);
          const baseUrl = this.props.currentUrl
            .replace(
              supportedLanguages[this.props.currentLanguage].urlPrefix,
              ''
            ) // Remove language prefix
            .replace('//', '/'); // Avoid possible double slash
          // console.log('baseUrl' + baseUrl);
          // const fullUrl = '/' + supportedLanguages[availableLanguage].urlPrefix + baseUrl;
          // console.log('full', fullUrl);
          return (
            <Link
              key={availableLanguage}
              to={baseUrl}
              onClick={() => {
                this.updateDefaultLanguage(availableLanguage);
              }}
            >
              {supportedLanguages[availableLanguage].name}
            </Link>
          );
        })}
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  currentUrl: PropTypes.string.isRequired,
};

export default LanguageSwitcher;
