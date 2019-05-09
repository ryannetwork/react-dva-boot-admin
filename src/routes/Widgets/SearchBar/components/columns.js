import React from 'react';
import { Input, Icon } from 'antd';

export const columns1 = [
  {
    title: 'roleType',
    name: 'roleType',
    dict: [
      { code: '1', codeName: '111' },
      { code: '2', codeName: '222' },
      { code: '3', codeName: '333' }
    ],
    searchItem: {
      type: 'select'
    }
  },
  {
    title: 'roleName',
    name: 'roleName',
    searchItem: {}
  },
  {
    title: 'order',
    name: 'order',
    searchItem: {
      type: 'number',
      min: 1,
      max: 99
    }
  }
];

export const columns2 = [
  {
    title: 'roleName',
    name: 'roleName',
    searchItem: {}
  },
  {
    title: 'Role type',
    name: 'roleType',
    dict: [
      { code: '1', codeName: '111' },
      { code: '2', codeName: '222' },
      { code: '3', codeName: '333' }
    ],
    searchItem: {
      type: 'select'
    }
  },
  {
    title: 'order',
    name: 'order',
    searchItem: {
      type: 'number'
    }
  }
];

export const columns3 = [
  {
    title: 'selection period',
    name: 'date1',
    searchItem: {
      type: 'date'
    }
  },
  {
    title: 'selection period',
    name: 'date2',
    searchItem: {
      type: 'date~',
      width: 300,
      placeholder: ['This is the start time', 'This is the end time']
    }
  },
  {
    title: 'selection period',
    name: 'date3',
    searchItem: {
      type: 'month'
    }
  }
];

export const columns4 = [
  {
    title: 'Condition1',
    name: 'key1',
    searchItem: {}
  },
  {
    title: 'Condition2',
    name: 'key2',
    searchItem: {}
  },
  {
    title: 'Condition3',
    name: 'key3',
    searchItem: {}
  },
  {
    title: 'Condition4',
    name: 'key4',
    searchItem: {}
  },
  {
    title: 'Condition5',
    name: 'key5',
    searchItem: {}
  },
  {
    title: 'Condition6',
    name: 'key6',
    searchItem: {}
  },
  {
    title: 'Condition7',
    name: 'key7',
    searchItem: {}
  },
  {
    title: 'Condition8',
    name: 'key8',
    searchItem: {}
  },
  {
    title: 'Condition 9',
    name: 'key9',
    searchItem: {}
  }
];

export const columns5 = [
  {
    title: 'address',
    name: 'key1',
    searchItem: {
      type: 'cascade',
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou'
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing'
            }
          ]
        }
      ]
    }
  },
  {
    title: 'address1',
    name: 'key2',
    searchItem: {
      type: 'treeSelect',
      treeData: [
        {
          value: 'zhejiang',
          title: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              title: 'Hangzhou'
            }
          ]
        },
        {
          value: 'jiangsu',
          title: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              title: 'Nanjing'
            }
          ]
        }
      ]
    }
  }
];

export const columns6 = [
  {
    title: 'With icon',
    name: 'key',
    searchItem: {
      type: 'custom',
      render: (record, form) => {
        // ...
        const { getFieldDecorator } = form;
        return getFieldDecorator('userName', {
          rules: [{ required: true, message: 'please enter user name!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
            placeholder="username"
          />
        );
      }
    }
  }
];
