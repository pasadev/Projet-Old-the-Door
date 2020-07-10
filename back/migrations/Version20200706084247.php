<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200706084247 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE story DROP FOREIGN KEY FK_EB560438C607266F');
        $this->addSql('DROP INDEX UNIQ_EB560438C607266F ON story');
        $this->addSql('ALTER TABLE story CHANGE first_chapter_id chapter_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE story ADD CONSTRAINT FK_EB560438579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id) ON DELETE CASCADE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_EB560438579F4768 ON story (chapter_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE story DROP FOREIGN KEY FK_EB560438579F4768');
        $this->addSql('DROP INDEX UNIQ_EB560438579F4768 ON story');
        $this->addSql('ALTER TABLE story CHANGE chapter_id first_chapter_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE story ADD CONSTRAINT FK_EB560438C607266F FOREIGN KEY (first_chapter_id) REFERENCES chapter (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_EB560438C607266F ON story (first_chapter_id)');
    }
}
