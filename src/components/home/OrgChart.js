import React from 'react';
import { JSCharting } from 'jscharting-react';

const config = {
    type: 'organization down',
    toolbar_items: {
        "Click Me": {
            events_click: function () {
                alert("Button clicked");
            }
        }
    },
    line: { color: '#004080', width: 1 },
    series: [
        {
            defaultPoint: {
                focusGlow: { color: '%color', opacity: .3 },
                label: {
                    text: '<b>%name</b><br/>%data<img margin_left=-60 margin_top=-64 width=64 height=64 src=%img>',
                    autoWrap: false,
                    color: '#004080',
                    margin_left: 60
                },
                annotation: {
                    padding: 9,
                    corners: 'round',
                    radius: 15,
                    margin: [15, 5, 10, 0]
                },
                outline_width: 0,
                color: '#b3d9ff',
                tooltip: '<b>Tasks:</b><br><span style=\'listStyleType: circle; listPadding: 0;\'>%tasks</span>'
            },
            points: [
                // To use information from the database, this should map through an array of people and dynamically populate the desired fields.
                {
                    name: 'Melody Stern', id: 'ms', color: '#0059b3', label_color: 'white',
                    attributes: {
                        'img': 'https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square.jpg',
                        'data': '<ul><li>President</li><li>630-555-1111</li><li><i>Batavia, IL</i></li></ul>',
                        'tasks': '<ul><li>Operations</li><li>Bookkeeping</li><li><i>Strategy</i></li></ul>'
                    }
                },
                {
                    name: 'Mark Hudson', id: 'mh', parent: 'ms',
                    attributes: {
                        'img': 'https://images.squarespace-cdn.com/content/v1/530a77dee4b035db71736c02/1569338234137-XN0AR0PLJO5DZ81FSEER/ke17ZwdGBToddI8pDm48kN-beAKDw50kUtknGgMt8vt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQcamhoEVvCJUcAD0bQa0T2B3ZOZwG7qQqBbrPxYiNGblZKtLIjH2wwwSeWmNyrTOg/Connecticut+Headshots+-+Seshu+Badrinath+-+peter-hurley-nyc-000+%28square%29.jpg',
                        'data': '<ul><li>Vice President Marketing</li><li>630-555-1111</li><li><i>Hanover Park, IL</i></li></ul>',
                        'tasks': '<ul><li>Product Strategy</li><li>Artistic Direction</li><li><i>Product Design</i></li></ul>'
                    }
                },
                {
                    name: 'Chris Lysek', id: 'cl', parent: 'ms',
                    attributes: {
                        'img': 'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/7129/square_thumb%403x.jpg',
                        'data': '<ul><li>Vice President Sales</li><li>630-555-2222</li><li><i>West Chicago, IL</i></li></ul>',
                        'tasks': '<ul><li>Sales HR</li><li>Market Development</li></ul>'
                    }
                },
                {
                    name: 'Karyn Borbas', id: 'kb', parent: 'mh',
                    attributes: {
                        'img': 'https://www.generalatlantic.com/wp-content/uploads/2017/11/square-crop-emily-tung-general-atlantic-headshot.jpg',
                        'data': '<ul><li>Marketing Manager</li><li>312-555-3333</li><li><i>Chicago, IL</i></li></ul>',
                        'tasks': '<ul><li>Purchasing</li><li>Review</li></ul>'
                    }
                },
                {
                    name: 'Chris Rup', id: 'cr', parent: 'mh',
                    attributes: {
                        'img': 'https://format-com-cld-res.cloudinary.com/image/private/s--hydRjvcM--/c_limit,g_center,h_65535,w_1600/fl_keep_iptc.progressive,q_95/v1/6c95a3ad4915a5c72d9d707a63179cfd/elyn-photography-headshots-professional-CG-72dpi-SQUARE-1.jpg',
                        'data': '<ul><li>Marketing Manager</li><li>773-555-4444</li><li><i>Chicago, IL</i></li></ul>',
                        'tasks': '<ul><li>Marketing HR</li><li>Market Research</li></ul>'
                    }
                },
            ]
        }
    ],
};

const divStyle = {
    maxWidth: '90%',
    height: '100%',
    margin: '0px auto'
};

export default class OrgChartComponent extends React.Component {
    render() {
        return (
            <div style={divStyle} ><JSCharting options={config} /></div>
        );
    }
}