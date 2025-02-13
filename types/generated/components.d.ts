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
      'shared-blocks.italic-caption-small': SharedBlocksItalicCaptionSmall;
      'shared-blocks.image-block': SharedBlocksImageBlock;
      'shared-blocks.horizontal-rule-block': SharedBlocksHorizontalRuleBlock;
      'shared-blocks.getting-help-internal-block': SharedBlocksGettingHelpInternalBlock;
      'rows.rows': RowsRows;
      'paragraph-blocks.paragraph-block': ParagraphBlocksParagraphBlock;
      'icons.bullet-list-icon': IconsBulletListIcon;
      'horizontal-rule-block.horizontal-rule-block': HorizontalRuleBlockHorizontalRuleBlock;
      'heading-blocks.heading-block': HeadingBlocksHeadingBlock;
      'grids.states-section-block': GridsStatesSectionBlock;
      'grids.right-states': GridsRightStates;
      'grids.left-images': GridsLeftImages;
      'grids.image-src': GridsImageSrc;
      'grids.image-headline-copy-grid': GridsImageHeadlineCopyGrid;
      'bullet-list-block-items.items': BulletListBlockItemsItems;
      'bullet-list-block.bullet-list-block': BulletListBlockBulletListBlock;
      'accessibility-table-block.accessibility-table-block': AccessibilityTableBlockAccessibilityTableBlock;
      'accessibility-blocks.table-row': AccessibilityBlocksTableRow;
      'accessibility-blocks.paragraph-block': AccessibilityBlocksParagraphBlock;
      'accessibility-blocks.accessibility-table-block': AccessibilityBlocksAccessibilityTableBlock;
    }
  }
}
