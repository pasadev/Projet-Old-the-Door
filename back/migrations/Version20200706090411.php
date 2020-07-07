<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200706090411 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chapter DROP FOREIGN KEY FK_F981B52E10DCC338');
        $this->addSql('DROP INDEX UNIQ_F981B52E10DCC338 ON chapter');
        $this->addSql('ALTER TABLE chapter CHANGE parent_chapter_id chapter_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE chapter ADD CONSTRAINT FK_F981B52E579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id) ON DELETE SET NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F981B52E579F4768 ON chapter (chapter_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chapter DROP FOREIGN KEY FK_F981B52E579F4768');
        $this->addSql('DROP INDEX UNIQ_F981B52E579F4768 ON chapter');
        $this->addSql('ALTER TABLE chapter CHANGE chapter_id parent_chapter_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE chapter ADD CONSTRAINT FK_F981B52E10DCC338 FOREIGN KEY (parent_chapter_id) REFERENCES chapter (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F981B52E10DCC338 ON chapter (parent_chapter_id)');
    }
}
