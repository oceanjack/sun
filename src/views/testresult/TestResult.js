import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { StoreAPI } from '@store/StoreAPI';
import { caches } from '@constants/caches';
import styles from './TestResult.module.less';

class Testresult extends Component {
  render() {
    return (
      <div>
        <div className={styles.TestResult}>
          <header className={styles.header}>
           <p>
              Great! {StoreAPI.getCache(caches.TestPageNum)} is Right!
            </p>
          </header>
        </div>
        <DocumentTitle title="恭喜～"></DocumentTitle>
      </div>
    );
  }
}

export default Testresult;
