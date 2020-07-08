<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200708154056 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE party DROP FOREIGN KEY FK_89954EE0EFBE2924');
        $this->addSql('DROP INDEX IDX_89954EE0EFBE2924 ON party');
        $this->addSql('ALTER TABLE party CHANGE for_story_id story_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE party ADD CONSTRAINT FK_89954EE0AA5D4036 FOREIGN KEY (story_id) REFERENCES story (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_89954EE0AA5D4036 ON party (story_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE party DROP FOREIGN KEY FK_89954EE0AA5D4036');
        $this->addSql('DROP INDEX IDX_89954EE0AA5D4036 ON party');
        $this->addSql('ALTER TABLE party CHANGE story_id for_story_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE party ADD CONSTRAINT FK_89954EE0EFBE2924 FOREIGN KEY (for_story_id) REFERENCES story (id)');
        $this->addSql('CREATE INDEX IDX_89954EE0EFBE2924 ON party (for_story_id)');
    }
}
