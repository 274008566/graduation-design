import React from 'react';
import Tooltip from 'bee-tooltip';
import 'bee-tooltip/build/Tooltip.css';
import { Command } from 'gg-editor';
import upperFirst from 'lodash/upperFirst';
import IconFont from '../IconFont/index';
// import styles from './index.less';
import './index.less'

const ToolbarButton = props => {
  const { command, icon, text, name } = props;

  return (
    <Command name={command}>
      <Tooltip
        overlay={text || upperFirst(command)}
        placement="bottom"
        // overlayClassName={styles.tooltip}
      >
        <IconFont type={`icon-${icon || command}`} className={name} />
      </Tooltip>
    </Command>
  );
};

export default ToolbarButton;
