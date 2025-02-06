import type { Struct, Schema } from '@strapi/strapi';

export interface SpacingBlockSpacingBlock extends Struct.ComponentSchema {
  collectionName: 'components_spacing_block_spacing_blocks';
  info: {
    displayName: 'SpacingBlock';
  };
  attributes: {
    height: Schema.Attribute.Integer;
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

export interface BulletListBlockBulletListBlock extends Struct.ComponentSchema {
  collectionName: 'components_bullet_list_block_bullet_list_blocks';
  info: {
    displayName: 'BulletListBlock';
  };
  attributes: {
    items: Schema.Attribute.Component<'bullet-list-block-items.items', true>;
  };
}

export interface ParagraphBlockParagraphBlock extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_block_paragraph_blocks';
  info: {
    displayName: 'ParagraphBlock';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface BulletListBlockItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_bullet_list_block_items_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    boldLead: Schema.Attribute.String;
    copy: Schema.Attribute.Text;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'spacing-block.spacing-block': SpacingBlockSpacingBlock;
      'rows.rows': RowsRows;
      'horizontal-rule-block.horizontal-rule-block': HorizontalRuleBlockHorizontalRuleBlock;
      'heading-blocks.heading-block': HeadingBlocksHeadingBlock;
      'bullet-list-block.bullet-list-block': BulletListBlockBulletListBlock;
      'paragraph-block.paragraph-block': ParagraphBlockParagraphBlock;
      'bullet-list-block-items.items': BulletListBlockItemsItems;
      'accessibility-table-block.accessibility-table-block': AccessibilityTableBlockAccessibilityTableBlock;
    }
  }
}
