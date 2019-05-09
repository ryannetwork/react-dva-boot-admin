import React from 'react';
import { Checkbox } from 'antd';
const CheckGroup = Checkbox.Group;

/**
 * 几种常用布局
 */
export default ({ theme, onChange }) => (
  <CheckGroup onChange={onChange} value={theme.layout}>
    <Checkbox className="fixedHeader" value="fixedHeader">
      Fixed head
    </Checkbox>
    <Checkbox className="fixedSidebar" value="fixedSidebar">
      Fixed sidebar
    </Checkbox>
    <Checkbox className="tabLayout" value="tabLayout">
      Label mode
    </Checkbox>
    <Checkbox className="fixedBreadcrumbs" value="fixedBreadcrumbs">
      Fixed breadcrumbs
    </Checkbox>
    <Checkbox className="hidedBreadcrumbs" value="hidedBreadcrumbs">
      Hide breadcrumbs
    </Checkbox>
  </CheckGroup>
);
