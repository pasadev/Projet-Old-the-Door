<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200705200742 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chapter DROP FOREIGN KEY FK_F981B52EEFBE2924');
        $this->addSql('DROP INDEX IDX_F981B52EEFBE2924 ON chapter');
        $this->addSql('ALTER TABLE chapter CHANGE for_story_id story_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE chapter ADD CONSTRAINT FK_F981B52EAA5D4036 FOREIGN KEY (story_id) REFERENCES story (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_F981B52EAA5D4036 ON chapter (story_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chapter DROP FOREIGN KEY FK_F981B52EAA5D4036');
        $this->addSql('DROP INDEX IDX_F981B52EAA5D4036 ON chapter');
        $this->addSql('ALTER TABLE chapter CHANGE story_id for_story_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE chapter ADD CONSTRAINT FK_F981B52EEFBE2924 FOREIGN KEY (for_story_id) REFERENCES story (id)');
        $this->addSql('CREATE INDEX IDX_F981B52EEFBE2924 ON chapter (for_story_id)');
    }
}
