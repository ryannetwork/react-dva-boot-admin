import React from 'react';
import DataTable from 'components/DataTable';
import Icon from 'components/Icon';
import Button from 'components/Button';

export default (self, employees) => [
	{
		title: 'deptName',
		name: 'deptName',
		tableItem: {},
		searchItem: {
			group: 'abc'
		},
		formItem: {}
	},
	{
		title: 'distributionNetwork',
		name: 'distributionNetwork',
		dict: [ { code: '0', codeName: '城市' }, { code: '1', codeName: '乡村' } ],
		tableItem: {},
		formItem: {
			type: 'select'
		},
		searchItem: {
			type: 'select'
		}
	},
	{
		title: 'address',
		name: 'address',
		tableItem: {},
		formItem: {},
		searchItem: {}
	},
	{
		title: 'type',
		name: 'type',
		tableItem: {},
		formItem: {},
		searchItem: {}
	},
	{
		title: 'planBeginTime',
		name: 'planBeginTime',
		tableItem: {},
		formItem: {
			type: 'datetime'
		},
		searchItem: {
			type: 'datetime'
		}
	},
	{
		title: 'planEndTime',
		name: 'planEndTime',
		tableItem: {},
		formItem: {
			type: 'datetime'
		},
		searchItem: {
			type: 'datetime'
		}
	},
	{
		title: 'workEmployee',
		name: 'workEmployee',
		tableItem: {
			render: (text) => text.map((item) => item.title).join(',')
		},
		formItem: {
			type: 'transfer',
			modal: true,
			dataSource: employees,
			normalize: (value) => value.map((item) => item.key)
		}
	},
	{
		title: 'content',
		name: 'content',
		formItem: {
			type: 'editor'
		}
	},
	{
		title: 'operating',
		tableItem: {
			width: 180,
			render: (text, record) => (
				<DataTable.Oper>
					<Button tooltip="edit" onClick={(e) => self.onUpdate(record)}>
						<Icon type="edit" />
					</Button>
					<Button tooltip="delete" onClick={(e) => self.onDelete(record)}>
						<Icon type="trash" />
					</Button>
				</DataTable.Oper>
			)
		}
	}
];
