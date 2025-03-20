const hash = require('object-hash')

const data = {
  recipient: {
    id: '43a851d5-c5db-4449-a853-88f206d77984',
    name: 'User 1',
    osCreatedAt: '2025-03-20T07:13:24.817Z',
    osUpdatedAt: '2025-03-20T07:13:24.817Z',
    osCreatedBy: 'anonymous',
    osUpdatedBy: 'anonymous'
  },
  issuer: {
    url: 'https://diksha.gov.in/cbse/',
    name: 'cbse',
    kid: '1-d03fb144-73ea-4f90-b957-5ba2af54817f',
    osCreatedAt: '2025-03-20T07:13:24.817Z',
    osUpdatedAt: '2025-03-20T07:13:24.817Z',
    osCreatedBy: 'anonymous',
    osUpdatedBy: 'anonymous'
  },
  training: {
    id: 'do_214273414443778048124',
    name: 'FMPS Course 1',
    type: 'Course',
    batchId: '0142736569042780160',
    osCreatedAt: '2025-03-20T07:13:24.817Z',
    osUpdatedAt: '2025-03-20T07:13:24.817Z',
    osCreatedBy: 'anonymous',
    osUpdatedBy: 'anonymous'
  },
  templateUrl: 'https://downloadableartifacts.blob.core.windows.net/release600/certificate_template.svg',
  status: 'ACTIVE',
  signatory: [
    {
      image: 'https://diksha.gov.in/cbse/cbse-logo.png',
      name: 'CBSE',
      id: 'cbse',
      designation: 'XBSE',
      osCreatedAt: '2025-03-20T07:13:24.817Z',
      osUpdatedAt: '2025-03-20T07:13:24.817Z',
      osCreatedBy: 'anonymous',
      osUpdatedBy: 'anonymous'
    }
  ],
  certificateLabel: '1 logo 1 signature',
  osOwner: [ 'anonymous' ],
  osCreatedAt: '2025-03-20T07:13:24.817Z',
  osUpdatedAt: '2025-03-20T07:13:24.817Z',
  osCreatedBy: 'anonymous',
  osUpdatedBy: 'anonymous'
}


console.log(hash(data))

