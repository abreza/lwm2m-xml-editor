import {
  Box,
  Button,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  MenuItem,
  Grid,
  IconButton,
} from '@material-ui/core';
import { ArrowDownward, ArrowUpward, CloudUpload } from '@material-ui/icons';
import { FC, useState } from 'react';
const xml2js = require('xml2js');

type LandingProps = {};

const operations = [
  { value: 'R', label: 'R' },
  { value: 'W', label: 'W' },
  { value: 'RW', label: 'RW' },
  { value: 'E', label: 'E' },
  { value: '', label: '-' },
];

const instances = [
  { value: 'Multiple', label: 'Multiple' },
  { value: 'Single', label: 'Single' },
];

const mandatory = [
  { value: 'Mandatory', label: 'Mandatory' },
  { value: 'Optional', label: 'Optional' },
];

const objectType = [
  { value: 'String', label: 'String' },
  { value: 'Integer', label: 'Integer' },
  { value: 'Float', label: 'Float' },
  { value: 'Boolean', label: 'Boolean' },
  { value: 'Opaque', label: 'Opaque' },
  { value: 'Time', label: 'Time' },
  { value: 'Objlink', label: 'Objlink' },
  { value: '', label: '' },
];

const Landing: FC<LandingProps> = () => {
  const [step, setStep] = useState(1);
  const [tempId, setTempId] = useState();

  const [lwm2mSchema, setLwm2mSchema] = useState({
    LWM2M: {
      $: {
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:noNamespaceSchemaLocation':
          'http://www.openmobilealliance.org/tech/profiles/LWM2M.xsd',
      },
      Object: [
        {
          $: { ObjectType: 'MODefinition' },
          Name: [''],
          Description1: [''],
          Description2: [''],
          ObjectID: [''],
          ObjectURN: [''],
          LWM2MVersion: [''],
          ObjectVersion: [''],
          MultipleInstances: [''],
          Mandatory: [''],
          Resources: [
            {
              Item: [],
            },
          ],
        },
      ],
    },
  });

  const downloadXml = (filename: string) => {
    var builder = new xml2js.Builder({
      cdata: true,
      renderOpts: { pretty: true, indent: '    ', newline: '\n' },
    });

    var xml = builder.buildObject(lwm2mSchema);

    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/xml;charset=utf-8,' + encodeURIComponent(xml)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const onChangeFile = async (e: any) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const file = e.target.files[0];

      var reader = new FileReader();

      reader.onload = function (event: any) {
        const txt = event.target.result;
        xml2js.parseString(txt, (err: any, result: any) => {
          setLwm2mSchema(result);
        });
      };
      reader.readAsText(file);
    }
  };

  // @ts-ignore
  const rows = lwm2mSchema?.LWM2M?.Object?.[0]?.Resources?.[0]?.Item || [];

  const onChangeConfig = (event: any, key: string) => {
    const temp = { ...lwm2mSchema };

    // @ts-ignore
    temp.LWM2M.Object[0][key][0] = event.target.value;
    setLwm2mSchema(temp);
  };

  const onChangeResource = (event: any, index: number, key: string) => {
    const temp = { ...lwm2mSchema };
    // @ts-ignore
    temp.LWM2M.Object[0].Resources[0].Item[index][key][0] = event.target.value;
    setLwm2mSchema(temp);
  };

  const onChangeId = (index: number, newId: number) => {
    const temp = { ...lwm2mSchema };
    // @ts-ignore
    temp.LWM2M.Object[0].Resources[0].Item[index].$.ID = newId;
    setLwm2mSchema(temp);
  };

  const validateId = (index: number, newId: number) => {
    const found = lwm2mSchema.LWM2M.Object[0].Resources[0].Item.find(
      (item: any, idx) => +item.$.ID === +newId && idx !== index
    );

    if (found) {
      const temp = { ...lwm2mSchema };
      // @ts-ignore
      temp.LWM2M.Object[0].Resources[0].Item[index].$.ID = tempId;
      setLwm2mSchema(temp);

      alert('ERROR');
      return false;
    }

    return true;
  };

  const onClickArrow = (index: number, direction: 'up' | 'down') => {
    // @ts-ignore
    const currentId = lwm2mSchema.LWM2M.Object[0].Resources[0].Item[index].$.ID;
    const newId = direction === 'up' ? +currentId - step : +currentId + step;
    if (validateId(index, newId)) {
      onChangeId(index, newId);
    }
  };

  return (
    <Box py={2}>
      <Container>
        <input
          accept="application/xml"
          style={{ display: 'none' }}
          id={'raised-button-file'}
          type="file"
          onChange={onChangeFile}
        />
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <Button
              component="label"
              htmlFor={'raised-button-file'}
              variant="contained"
              color="primary"
              startIcon={<CloudUpload />}>
              Load Xml
            </Button>
          </Grid>

          {lwm2mSchema && (
            <>
              <Grid item>
                <Box p={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(event) => downloadXml('file.xml')}>
                    Download Xml
                  </Button>
                </Box>
              </Grid>
              <Grid item>
                <TextField
                  type="number"
                  label="step"
                  value={step}
                  onChange={(event: any) => setStep(+event.target.value)}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Box my={2}>
          <Paper>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item>
                <TextField
                  label="Name"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'Name')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.Name[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Description"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'Description1')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.Description1[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="ObjectID"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'ObjectID')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.ObjectID[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="ObjectURN"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'ObjectURN')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.ObjectURN[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="LWM2MVersion"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'LWM2MVersion')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.LWM2MVersion[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="ObjectVersion"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'ObjectVersion')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.ObjectVersion[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="MultipleInstances"
                  variant="outlined"
                  onChange={(event) =>
                    onChangeConfig(event, 'MultipleInstances')
                  }
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.MultipleInstances[0]}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Mandatory"
                  variant="outlined"
                  onChange={(event) => onChangeConfig(event, 'Mandatory')}
                  // @ts-ignore
                  value={lwm2mSchema?.LWM2M?.Object?.[0]?.Mandatory[0]}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box my={2}>
          <Paper>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">-</TableCell>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Operations</TableCell>
                  <TableCell align="center">Instances</TableCell>
                  <TableCell align="center">Mandatory</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Range Of Enumeration</TableCell>
                  <TableCell align="center">Unit</TableCell>
                  <TableCell align="center">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <Grid container direction="column">
                        <Grid item>
                          <IconButton onClick={() => onClickArrow(index, 'up')}>
                            <ArrowUpward />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton
                            onClick={() => onClickArrow(index, 'down')}>
                            <ArrowDownward />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        value={row.$.ID}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={(event: any) =>
                          onChangeId(index, event.target.value)
                        }
                        onFocus={() => setTempId(row.$.ID)}
                        onBlur={() => validateId(index, row.$.ID)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        value={row.Name[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'Name')
                        }
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        select
                        fullWidth
                        value={row.Operations[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'Operations')
                        }>
                        {operations.map((op) => (
                          <MenuItem value={op.value}>{op.label}</MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        select
                        fullWidth
                        value={row.MultipleInstances[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'MultipleInstances')
                        }>
                        {instances.map((op) => (
                          <MenuItem value={op.value}>{op.label}</MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        select
                        fullWidth
                        value={row.Mandatory[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'Mandatory')
                        }>
                        {mandatory.map((op) => (
                          <MenuItem value={op.value}>{op.label}</MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        select
                        fullWidth
                        value={row.Type[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'Type')
                        }>
                        {objectType.map((op) => (
                          <MenuItem value={op.value}>{op.label}</MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        value={row.RangeEnumeration[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'RangeEnumeration')
                        }
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        value={row.Units[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'Units')
                        }
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        value={row.Description[0]}
                        onChange={(event) =>
                          onChangeResource(event, index, 'Description')
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Landing;
