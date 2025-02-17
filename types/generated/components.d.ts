import type { Struct, Schema } from '@strapi/strapi';

export interface SpacingBlocksSpacingBlock extends Struct.ComponentSchema {
  collectionName: 'components_spacing_blocks_spacing_blocks';
  info: {
    displayName: 'Spacing Block';
  };
  attributes: {
    height: Schema.Attribute.Integer;
  };
}

export interface SpacingBlockSpacingBlock extends Struct.ComponentSchema {
  collectionName: 'components_spacing_block_spacing_blocks';
  info: {
    displayName: 'SpacingBlock';
  };
  attributes: {
    height: Schema.Attribute.Integer;
  };
}

export interface SharedBlocksParagraphHeadline extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_paragraph_headlines';
  info: {
    displayName: 'ParagraphHeadline';
  };
  attributes: {
    headline: Schema.Attribute.String;
  };
}

export interface SharedBlocksItalicCaptionSmall extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_italic_caption_smalls';
  info: {
    displayName: 'Italic Caption Small';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface SharedBlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_image_blocks';
  info: {
    displayName: 'Image Block';
    description: '';
  };
  attributes: {
    folder: Schema.Attribute.String;
    src: Schema.Attribute.String;
  };
}

export interface SharedBlocksHorizontalRuleBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_horizontal_rule_blocks';
  info: {
    displayName: 'Horizontal Rule Block';
  };
  attributes: {
    style: Schema.Attribute.String;
  };
}

export interface SharedBlocksGettingHelpInternalBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_getting_help_internal_blocks';
  info: {
    displayName: 'Getting Help Internal Block';
  };
  attributes: {
    insert: Schema.Attribute.String;
  };
}

export interface RowsRows extends Struct.ComponentSchema {
  collectionName: 'components_rows_rows';
  info: {
    displayName: 'Rows';
    description: '';
  };
  attributes: {
    componentName: Schema.Attribute.String;
    accTest: Schema.Attribute.String;
    accStatus: Schema.Attribute.String;
  };
}

export interface ParagraphBlocksParagraphBlock extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_blocks_paragraph_blocks';
  info: {
    displayName: 'Paragraph Block';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface OverviewBlocksTableRows extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_table_rows';
  info: {
    displayName: 'tableRows';
  };
  attributes: {
    size: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    metrics: Schema.Attribute.Text;
  };
}

export interface OverviewBlocksTableHeadings extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_table_headings';
  info: {
    displayName: 'tableHeadings';
  };
  attributes: {
    size: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface OverviewBlocksTableHead extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_table_heads';
  info: {
    displayName: 'tableHead';
  };
  attributes: {};
}

export interface OverviewBlocksSizeSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_size_section_blocks';
  info: {
    displayName: 'Size Section Block';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    imageSrc: Schema.Attribute.String;
    italicParagraph: Schema.Attribute.Text;
    tableHeadings: Schema.Attribute.Component<
      'overview-blocks.table-headings',
      true
    >;
    tableRows: Schema.Attribute.Component<'overview-blocks.table-rows', true>;
  };
}

export interface IconsBulletListIcon extends Struct.ComponentSchema {
  collectionName: 'components_icons_bullet_list_icons';
  info: {
    displayName: 'Bullet List Icon';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface HorizontalRuleBlockHorizontalRuleBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_horizontal_rule_block_horizontal_rule_blocks';
  info: {
    displayName: 'HorizontalRuleBlock';
  };
  attributes: {
    style: Schema.Attribute.String;
  };
}

export interface HeadingBlocksHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_heading_blocks_heading_blocks';
  info: {
    displayName: 'Heading Block';
  };
  attributes: {
    headingText: Schema.Attribute.String;
    headingLevel: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']>;
  };
}

export interface GridsStatesSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_states_section_blocks';
  info: {
    displayName: 'States Section Block';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leftImages: Schema.Attribute.Component<'grids.left-images', true>;
    rightStates: Schema.Attribute.Component<'grids.right-states', true>;
  };
}

export interface GridsRightStates extends Struct.ComponentSchema {
  collectionName: 'components_grids_right_states';
  info: {
    displayName: 'rightStates';
    description: '';
  };
  attributes: {
    boldTitle: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface GridsMetricsRow extends Struct.ComponentSchema {
  collectionName: 'components_grids_metrics_rows';
  info: {
    displayName: 'Metrics Row';
    description: '';
  };
  attributes: {
    imageSrc: Schema.Attribute.String;
    boldTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    topSpacing: Schema.Attribute.Integer;
    bulletList: Schema.Attribute.Component<
      'bullet-list-block.bullet-list-block',
      true
    >;
    postBulletParagraph: Schema.Attribute.Text;
  };
}

export interface GridsMetricSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_metric_section_blocks';
  info: {
    displayName: 'Metric Section Block';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    row1Left: Schema.Attribute.Component<'grids.metrics-row', true>;
    row1Right: Schema.Attribute.Component<'grids.metrics-row', true>;
    row2Left: Schema.Attribute.Component<'grids.metrics-row', true>;
    row2Right: Schema.Attribute.Component<'grids.metrics-row', true>;
  };
}

export interface GridsLeftImages extends Struct.ComponentSchema {
  collectionName: 'components_grids_left_images';
  info: {
    displayName: 'leftImages';
    description: '';
  };
  attributes: {
    src: Schema.Attribute.String;
  };
}

export interface GridsImageSrc extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_srcs';
  info: {
    displayName: 'Grid Content';
    description: '';
  };
  attributes: {
    imageSrc: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface GridsImageHeadlineCopyGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_headline_copy_grids';
  info: {
    displayName: 'Image Headline Copy Grid';
    description: '';
  };
  attributes: {
    appearanceData: Schema.Attribute.Component<'grids.image-src', true>;
  };
}

export interface GridsImageHeadlineCopyBulletGrid
  extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_headline_copy_bullet_grids';
  info: {
    displayName: 'Image Headline Copy Bullet Grid';
    description: '';
  };
  attributes: {
    imageHeadlineCopy: Schema.Attribute.Component<
      'grids.image-headline-copy-grid',
      true
    >;
    bulletList: Schema.Attribute.Component<
      'bullet-list-block.bullet-list-block',
      true
    >;
  };
}

export interface GridsDontItems extends Struct.ComponentSchema {
  collectionName: 'components_grids_dont_items';
  info: {
    displayName: 'dontItems';
    description: '';
  };
  attributes: {
    bestPracticeItem: Schema.Attribute.Component<
      'grids.best-practice-item',
      true
    >;
  };
}

export interface GridsDoItems extends Struct.ComponentSchema {
  collectionName: 'components_grids_do_items';
  info: {
    displayName: 'doItems';
    description: '';
  };
  attributes: {
    bestPracticeItem: Schema.Attribute.Component<
      'grids.best-practice-item',
      true
    >;
  };
}

export interface GridsBestPracticesSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_best_practices_section_blocks';
  info: {
    displayName: 'Best Practices Section Block';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    doItems: Schema.Attribute.Component<'grids.do-items', true>;
    dontItems: Schema.Attribute.Component<'grids.dont-items', true>;
  };
}

export interface GridsBestPracticeItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_best_practice_items';
  info: {
    displayName: 'Best Practice Item';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    color: Schema.Attribute.String;
    symbol: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    imageSrc: Schema.Attribute.String;
  };
}

export interface BulletListBlockBulletListBlock extends Struct.ComponentSchema {
  collectionName: 'components_bullet_list_block_bullet_list_blocks';
  info: {
    displayName: 'BulletListBlock';
    description: '';
  };
  attributes: {
    items: Schema.Attribute.Component<'bullet-list-block-items.items', true>;
  };
}

export interface BulletListBlockItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_bullet_list_block_items_items';
  info: {
    displayName: 'items';
    description: '';
  };
  attributes: {
    boldLead: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface AccessibilityTableBlockAccessibilityTableBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_table_block_accessibility_table_blocks';
  info: {
    displayName: 'AccessibilityTableBlock';
    description: '';
  };
  attributes: {
    row1: Schema.Attribute.Component<'rows.rows', true>;
  };
}

export interface AccessibilityBlocksTableRow extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_blocks_table_rows';
  info: {
    displayName: 'Table Row';
    description: '';
  };
  attributes: {
    componentName: Schema.Attribute.String;
    test: Schema.Attribute.String;
    componentStatus: Schema.Attribute.String;
  };
}

export interface AccessibilityBlocksParagraphBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_blocks_paragraph_blocks';
  info: {
    displayName: 'Paragraph Block';
    description: '';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface AccessibilityBlocksAccessibilityTableBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_blocks_accessibility_table_blocks';
  info: {
    displayName: 'Accessibility Table Block';
    description: '';
  };
  attributes: {
    row: Schema.Attribute.Component<'accessibility-blocks.table-row', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'spacing-blocks.spacing-block': SpacingBlocksSpacingBlock;
      'spacing-block.spacing-block': SpacingBlockSpacingBlock;
      'shared-blocks.paragraph-headline': SharedBlocksParagraphHeadline;
      'shared-blocks.italic-caption-small': SharedBlocksItalicCaptionSmall;
      'shared-blocks.image-block': SharedBlocksImageBlock;
      'shared-blocks.horizontal-rule-block': SharedBlocksHorizontalRuleBlock;
      'shared-blocks.getting-help-internal-block': SharedBlocksGettingHelpInternalBlock;
      'rows.rows': RowsRows;
      'paragraph-blocks.paragraph-block': ParagraphBlocksParagraphBlock;
      'overview-blocks.table-rows': OverviewBlocksTableRows;
      'overview-blocks.table-headings': OverviewBlocksTableHeadings;
      'overview-blocks.table-head': OverviewBlocksTableHead;
      'overview-blocks.size-section-block': OverviewBlocksSizeSectionBlock;
      'icons.bullet-list-icon': IconsBulletListIcon;
      'horizontal-rule-block.horizontal-rule-block': HorizontalRuleBlockHorizontalRuleBlock;
      'heading-blocks.heading-block': HeadingBlocksHeadingBlock;
      'grids.states-section-block': GridsStatesSectionBlock;
      'grids.right-states': GridsRightStates;
      'grids.metrics-row': GridsMetricsRow;
      'grids.metric-section-block': GridsMetricSectionBlock;
      'grids.left-images': GridsLeftImages;
      'grids.image-src': GridsImageSrc;
      'grids.image-headline-copy-grid': GridsImageHeadlineCopyGrid;
      'grids.image-headline-copy-bullet-grid': GridsImageHeadlineCopyBulletGrid;
      'grids.dont-items': GridsDontItems;
      'grids.do-items': GridsDoItems;
      'grids.best-practices-section-block': GridsBestPracticesSectionBlock;
      'grids.best-practice-item': GridsBestPracticeItem;
      'bullet-list-block.bullet-list-block': BulletListBlockBulletListBlock;
      'bullet-list-block-items.items': BulletListBlockItemsItems;
      'accessibility-table-block.accessibility-table-block': AccessibilityTableBlockAccessibilityTableBlock;
      'accessibility-blocks.table-row': AccessibilityBlocksTableRow;
      'accessibility-blocks.paragraph-block': AccessibilityBlocksParagraphBlock;
      'accessibility-blocks.accessibility-table-block': AccessibilityBlocksAccessibilityTableBlock;
    }
  }
}
