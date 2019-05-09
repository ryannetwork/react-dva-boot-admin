import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './report.less';
const CheckboxGroup = Checkbox.Group;

/**
 * 示例报表打印
 */
class Report extends Component {
  render() {
    const plainOptions = [
      { value: '1066001', label: 'Development and implementation' },
      { value: '1066002', label: 'test' },
      { value: '1066003', label: 'Test run' }
    ];
    return (
      <div className="system-audit-pring">
        <table className="tg">
          <tbody>
            <tr>
              <th className="tg-wp8o" colSpan="5">
                <h1>XX deployment /Implementation of the signing</h1>
                <h3 className="version">Version number: 20181121</h3>
              </th>
            </tr>
            <tr>
              <td className="tg-obcv left1" rowSpan="5">
                Applicant fill in
              </td>
              <td className="tg-obcv left2 hfixed">system name</td>
              <td className="tg-73oq" colSpan="3" />
            </tr>
            <tr>
              <td className="tg-obcv left2 hfixed">system status</td>
              <td className="tg-73oq" colSpan="3">
                <CheckboxGroup options={plainOptions} />
              </td>
            </tr>
            <tr>
              <td className="tg-obcv left2 hfixed">
                Responsible for the system business unit
              </td>
              <td className="tg-73oq" colSpan="3" />
            </tr>
            <tr>
              <td className="tg-obcv left2">systems Manual</td>
              <td className="tg-73oq xtsm-content" colSpan="3">
                <i>
                  (A brief description of the basic situation of the system:
                  main functions, deployment methods, hardware architecture,
                  software architecture, etc., such as: required server type,
                  quantity, configuration; application database types and
                  versions, etc.){' '}
                </i>
                <p />
              </td>
            </tr>
            <tr>
              <td className="tg-73oq h20" colSpan="2">
                <div className="w50">
                  Application unit:
                  <div className="sign">
                    Signature of the person in charge:
                    <br />
                    (Stamp)
                  </div>
                  <div className="date">&nbsp;year&emsp;month&emsp;day</div>
                </div>
              </td>
              <td className="tg-73oq" colSpan="2">
                <div className="w50">
                  Implementation unit:
                  <div className="sign">
                    Implementation unit:
                    <br />
                    (Stamp)
                  </div>
                  <div className="date">&nbsp;year&emsp;month&emsp;day</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-qtf5 left1">Approval item</td>
              <td className="tg-73oq h20" colSpan="2">
                <div className="w50">
                  Business department comments:
                  <p />
                  <div className="sign">
                    Signature of the person in charge:
                    <br />
                    (Stamp)
                  </div>
                  <div className="date">&nbsp;year&emsp;month&emsp;day</div>
                </div>
              </td>
              <td className="tg-73oq" colSpan="2">
                <div className="w50">
                  Ministry of Science and Technology Information:
                  <p />
                  <div className="sign">
                    Signature of the person in charge:
                    <br />
                    (Stamp)
                  </div>
                  <div className="date">&nbsp;year&emsp;month&emsp;day</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Report;
