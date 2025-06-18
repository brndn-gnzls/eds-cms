import type { Schema, Struct } from '@strapi/strapi';

export interface AccessibilityBlocksAccessibilityTableBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_blocks_accessibility_table_blocks';
  info: {
    description: '';
    displayName: 'Accessibility Table Block';
  };
  attributes: {
    row: Schema.Attribute.Component<'accessibility-blocks.table-row', true>;
  };
}

export interface AccessibilityBlocksParagraphBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_blocks_paragraph_blocks';
  info: {
    description: '';
    displayName: 'Paragraph Block';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface AccessibilityBlocksTableRow extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_blocks_table_rows';
  info: {
    description: '';
    displayName: 'Table Row';
  };
  attributes: {
    componentName: Schema.Attribute.String;
    componentStatus: Schema.Attribute.String;
    test: Schema.Attribute.String;
  };
}

export interface AccessibilityTableBlockAccessibilityTableBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_table_block_accessibility_table_blocks';
  info: {
    description: '';
    displayName: 'AccessibilityTableBlock';
  };
  attributes: {
    row1: Schema.Attribute.Component<'rows.rows', true>;
  };
}

export interface BulletListBlockItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_bullet_list_block_items_items';
  info: {
    description: '';
    displayName: 'items';
  };
  attributes: {
    body: Schema.Attribute.Text;
    boldLead: Schema.Attribute.String;
  };
}

export interface BulletListBlockBulletListBlock extends Struct.ComponentSchema {
  collectionName: 'components_bullet_list_block_bullet_list_blocks';
  info: {
    description: '';
    displayName: 'BulletListBlock';
  };
  attributes: {
    items: Schema.Attribute.Component<'bullet-list-block-items.items', true>;
  };
}

export interface CustomBlocksStorybookModule extends Struct.ComponentSchema {
  collectionName: 'components_custom_blocks_storybook_modules';
  info: {
    displayName: 'Storybook Module';
  };
  attributes: {
    componentName: Schema.Attribute.String;
  };
}

export interface GlobalImageAsset extends Struct.ComponentSchema {
  collectionName: 'components_global_image_assets';
  info: {
    displayName: 'ImageAsset';
  };
  attributes: {
    fileName: Schema.Attribute.String;
    folder: Schema.Attribute.String;
  };
}

export interface GlobalLink extends Struct.ComponentSchema {
  collectionName: 'components_global_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Schema.Attribute.Text;
    url: Schema.Attribute.Text;
  };
}

export interface GlobalLinkList extends Struct.ComponentSchema {
  collectionName: 'components_global_link_lists';
  info: {
    displayName: 'link-list';
  };
  attributes: {
    linkName: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GlobalSingleBullet extends Struct.ComponentSchema {
  collectionName: 'components_global_single_bullets';
  info: {
    displayName: 'singleBullet';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface GridsBestPracticeItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_best_practice_items';
  info: {
    description: '';
    displayName: 'Best Practice Item';
  };
  attributes: {
    color: Schema.Attribute.String;
    imageSrc: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    symbol: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GridsBestPracticesSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_best_practices_section_blocks';
  info: {
    description: '';
    displayName: 'Best Practices Section Block';
  };
  attributes: {
    doItems: Schema.Attribute.Component<'grids.do-items', true>;
    dontItems: Schema.Attribute.Component<'grids.dont-items', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
  };
}

export interface GridsDoItems extends Struct.ComponentSchema {
  collectionName: 'components_grids_do_items';
  info: {
    description: '';
    displayName: 'doItems';
  };
  attributes: {
    bestPracticeItem: Schema.Attribute.Component<
      'grids.best-practice-item',
      true
    >;
  };
}

export interface GridsDontItems extends Struct.ComponentSchema {
  collectionName: 'components_grids_dont_items';
  info: {
    description: '';
    displayName: 'dontItems';
  };
  attributes: {
    bestPracticeItem: Schema.Attribute.Component<
      'grids.best-practice-item',
      true
    >;
  };
}

export interface GridsImageHeadlineCopyBulletGrid
  extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_headline_copy_bullet_grids';
  info: {
    description: '';
    displayName: 'Image Headline Copy Bullet Grid';
  };
  attributes: {
    bulletList: Schema.Attribute.Component<
      'bullet-list-block.bullet-list-block',
      true
    >;
    imageHeadlineCopy: Schema.Attribute.Component<
      'grids.image-headline-copy-grid',
      true
    >;
  };
}

export interface GridsImageHeadlineCopyGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_headline_copy_grids';
  info: {
    description: '';
    displayName: 'Image Headline Copy Grid';
  };
  attributes: {
    appearanceData: Schema.Attribute.Component<'grids.image-src', true>;
  };
}

export interface GridsImageSrc extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_srcs';
  info: {
    description: '';
    displayName: 'Grid Content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    imageSrc: Schema.Attribute.String;
  };
}

export interface GridsLeftImages extends Struct.ComponentSchema {
  collectionName: 'components_grids_left_images';
  info: {
    description: '';
    displayName: 'leftImages';
  };
  attributes: {
    src: Schema.Attribute.String;
  };
}

export interface GridsMetricSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_metric_section_blocks';
  info: {
    description: '';
    displayName: 'Metric Section Block';
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

export interface GridsMetricsRow extends Struct.ComponentSchema {
  collectionName: 'components_grids_metrics_rows';
  info: {
    description: '';
    displayName: 'Metrics Row';
  };
  attributes: {
    boldTitle: Schema.Attribute.String;
    bulletList: Schema.Attribute.Component<
      'bullet-list-block.bullet-list-block',
      true
    >;
    description: Schema.Attribute.Text;
    imageSrc: Schema.Attribute.String;
    postBulletParagraph: Schema.Attribute.Text;
    topSpacing: Schema.Attribute.Integer;
  };
}

export interface GridsRightStates extends Struct.ComponentSchema {
  collectionName: 'components_grids_right_states';
  info: {
    description: '';
    displayName: 'rightStates';
  };
  attributes: {
    boldTitle: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface GridsStatesSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_states_section_blocks';
  info: {
    description: '';
    displayName: 'States Section Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leftImages: Schema.Attribute.Component<'grids.left-images', true>;
    rightStates: Schema.Attribute.Component<'grids.right-states', true>;
  };
}

export interface HeadingBlocksHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_heading_blocks_heading_blocks';
  info: {
    displayName: 'Heading Block';
  };
  attributes: {
    headingLevel: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']>;
    headingText: Schema.Attribute.String;
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

export interface IconsBulletListIcon extends Struct.ComponentSchema {
  collectionName: 'components_icons_bullet_list_icons';
  info: {
    displayName: 'Bullet List Icon';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface OverviewBlocksSizeSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_size_section_blocks';
  info: {
    description: '';
    displayName: 'Size Section Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imageSrc: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    italicParagraph: Schema.Attribute.Text;
    tableHeadings: Schema.Attribute.Component<
      'overview-blocks.table-headings',
      true
    >;
    tableRows: Schema.Attribute.Component<'overview-blocks.table-rows', true>;
  };
}

export interface OverviewBlocksTableHead extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_table_heads';
  info: {
    displayName: 'tableHead';
  };
  attributes: {};
}

export interface OverviewBlocksTableHeadings extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_table_headings';
  info: {
    displayName: 'tableHeadings';
  };
  attributes: {
    description: Schema.Attribute.String;
    size: Schema.Attribute.String;
  };
}

export interface OverviewBlocksTableRows extends Struct.ComponentSchema {
  collectionName: 'components_overview_blocks_table_rows';
  info: {
    displayName: 'tableRows';
  };
  attributes: {
    description: Schema.Attribute.Text;
    metrics: Schema.Attribute.Text;
    size: Schema.Attribute.Text;
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

export interface RowsRows extends Struct.ComponentSchema {
  collectionName: 'components_rows_rows';
  info: {
    description: '';
    displayName: 'Rows';
  };
  attributes: {
    accStatus: Schema.Attribute.String;
    accTest: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
  };
}

export interface SharedBlocksAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
  };
  attributes: {
    content: Schema.Attribute.String;
    label: Schema.Attribute.String;
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

export interface SharedBlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_image_blocks';
  info: {
    description: '';
    displayName: 'Image Block';
  };
  attributes: {
    folder: Schema.Attribute.String;
    src: Schema.Attribute.String;
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

export interface SharedBlocksLargeAccordionBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_large_accordion_blocks';
  info: {
    displayName: 'LargeAccordionBlock';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared-blocks.accordion-item', true>;
  };
}

export interface SharedBlocksNotificationBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_notification_boxes';
  info: {
    displayName: 'NotificationBox';
  };
  attributes: {
    borderColor: Schema.Attribute.String;
    content: Schema.Attribute.Text;
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

export interface SharedBlocksResourceGridItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks_resource_grid_items';
  info: {
    displayName: 'resource-grid-item';
  };
  attributes: {
    cornerIcon: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    logo: Schema.Attribute.String;
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

export interface SpacingBlocksSpacingBlock extends Struct.ComponentSchema {
  collectionName: 'components_spacing_blocks_spacing_blocks';
  info: {
    displayName: 'Spacing Block';
  };
  attributes: {
    height: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accessibility-blocks.accessibility-table-block': AccessibilityBlocksAccessibilityTableBlock;
      'accessibility-blocks.paragraph-block': AccessibilityBlocksParagraphBlock;
      'accessibility-blocks.table-row': AccessibilityBlocksTableRow;
      'accessibility-table-block.accessibility-table-block': AccessibilityTableBlockAccessibilityTableBlock;
      'bullet-list-block-items.items': BulletListBlockItemsItems;
      'bullet-list-block.bullet-list-block': BulletListBlockBulletListBlock;
      'custom-blocks.storybook-module': CustomBlocksStorybookModule;
      'global.image-asset': GlobalImageAsset;
      'global.link': GlobalLink;
      'global.link-list': GlobalLinkList;
      'global.single-bullet': GlobalSingleBullet;
      'grids.best-practice-item': GridsBestPracticeItem;
      'grids.best-practices-section-block': GridsBestPracticesSectionBlock;
      'grids.do-items': GridsDoItems;
      'grids.dont-items': GridsDontItems;
      'grids.image-headline-copy-bullet-grid': GridsImageHeadlineCopyBulletGrid;
      'grids.image-headline-copy-grid': GridsImageHeadlineCopyGrid;
      'grids.image-src': GridsImageSrc;
      'grids.left-images': GridsLeftImages;
      'grids.metric-section-block': GridsMetricSectionBlock;
      'grids.metrics-row': GridsMetricsRow;
      'grids.right-states': GridsRightStates;
      'grids.states-section-block': GridsStatesSectionBlock;
      'heading-blocks.heading-block': HeadingBlocksHeadingBlock;
      'horizontal-rule-block.horizontal-rule-block': HorizontalRuleBlockHorizontalRuleBlock;
      'icons.bullet-list-icon': IconsBulletListIcon;
      'overview-blocks.size-section-block': OverviewBlocksSizeSectionBlock;
      'overview-blocks.table-head': OverviewBlocksTableHead;
      'overview-blocks.table-headings': OverviewBlocksTableHeadings;
      'overview-blocks.table-rows': OverviewBlocksTableRows;
      'paragraph-blocks.paragraph-block': ParagraphBlocksParagraphBlock;
      'rows.rows': RowsRows;
      'shared-blocks.accordion-item': SharedBlocksAccordionItem;
      'shared-blocks.getting-help-internal-block': SharedBlocksGettingHelpInternalBlock;
      'shared-blocks.horizontal-rule-block': SharedBlocksHorizontalRuleBlock;
      'shared-blocks.image-block': SharedBlocksImageBlock;
      'shared-blocks.italic-caption-small': SharedBlocksItalicCaptionSmall;
      'shared-blocks.large-accordion-block': SharedBlocksLargeAccordionBlock;
      'shared-blocks.notification-box': SharedBlocksNotificationBox;
      'shared-blocks.paragraph-headline': SharedBlocksParagraphHeadline;
      'shared-blocks.resource-grid-item': SharedBlocksResourceGridItem;
      'spacing-block.spacing-block': SpacingBlockSpacingBlock;
      'spacing-blocks.spacing-block': SpacingBlocksSpacingBlock;
    }
  }
}
