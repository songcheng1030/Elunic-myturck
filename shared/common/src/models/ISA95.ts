/**
 * See: https://www.researchgate.net/figure/ISA-95-equipment-hierarchy-model_fig7_310659261
 */
export enum ISA95EquipmentHierarchyModelElement {
  NONE = 'NONE',
  ENTERPRISE = 'ENTERPRISE',
  SITE = 'SITE',
  AREA = 'AREA',

  WORK_CENTER = 'WORK_CENTER',
  PROCESS_CELL = 'PROCESS_CELL',
  PRODUCTION_UNIT = 'PRODUCTION_UNIT',
  PRODUCTION_LINE = 'PRODUCTION_LINE',
  STORAGE_ZONE = 'STORAGE_ZONE',

  WORK_UNIT = 'WORK_UNITS',
  STORAGE_UNIT = 'STORAGE_UNIT',
  EQUIPMENT_MODULE = 'EQUIPMENT_MODULE',
  CONTROL_MODULE = 'CONTROL_MODULE',
  UNIT = 'UNIT',
}