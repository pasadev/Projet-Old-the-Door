<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200702122459 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chapter ADD for_story_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE chapter ADD CONSTRAINT FK_F981B52EEFBE2924 FOREIGN KEY (for_story_id) REFERENCES story (id)');
        $this->addSql('CREATE INDEX IDX_F981B52EEFBE2924 ON chapter (for_story_id)');
        $this->addSql('ALTER TABLE party ADD player_id INT DEFAULT NULL, ADD for_story_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE party ADD CONSTRAINT FK_89954EE099E6F5DF FOREIGN KEY (player_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE party ADD CONSTRAINT FK_89954EE0EFBE2924 FOREIGN KEY (for_story_id) REFERENCES story (id)');
        $this->addSql('CREATE INDEX IDX_89954EE099E6F5DF ON party (player_id)');
        $this->addSql('CREATE INDEX IDX_89954EE0EFBE2924 ON party (for_story_id)');
        $this->addSql('ALTER TABLE story ADD first_chapter_id INT DEFAULT NULL, ADD author_id INT DEFAULT NULL, CHANGE active active TINYINT(1) DEFAULT \'0\' NOT NULL');
        $this->addSql('ALTER TABLE story ADD CONSTRAINT FK_EB560438C607266F FOREIGN KEY (first_chapter_id) REFERENCES chapter (id)');
        $this->addSql('ALTER TABLE story ADD CONSTRAINT FK_EB560438F675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_EB560438C607266F ON story (first_chapter_id)');
        $this->addSql('CREATE INDEX IDX_EB560438F675F31B ON story (author_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chapter DROP FOREIGN KEY FK_F981B52EEFBE2924');
        $this->addSql('DROP INDEX IDX_F981B52EEFBE2924 ON chapter');
        $this->addSql('ALTER TABLE chapter DROP for_story_id');
        $this->addSql('ALTER TABLE party DROP FOREIGN KEY FK_89954EE099E6F5DF');
        $this->addSql('ALTER TABLE party DROP FOREIGN KEY FK_89954EE0EFBE2924');
        $this->addSql('DROP INDEX IDX_89954EE099E6F5DF ON party');
        $this->addSql('DROP INDEX IDX_89954EE0EFBE2924 ON party');
        $this->addSql('ALTER TABLE party DROP player_id, DROP for_story_id');
        $this->addSql('ALTER TABLE story DROP FOREIGN KEY FK_EB560438C607266F');
        $this->addSql('ALTER TABLE story DROP FOREIGN KEY FK_EB560438F675F31B');
        $this->addSql('DROP INDEX UNIQ_EB560438C607266F ON story');
        $this->addSql('DROP INDEX IDX_EB560438F675F31B ON story');
        $this->addSql('ALTER TABLE story DROP first_chapter_id, DROP author_id, CHANGE active active TINYINT(1) NOT NULL');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
    }
}
