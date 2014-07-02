module.exports = {

  commands: {
    list_directory: {
      title: 'Directory listing',
      description: 'List all files in directory in which command was executed. Has optional command-line string argument.',
      cmd: 'ls {0}',
      params: [
        {
          default: '-la',
          title: 'Command line arguments'
        }
      ]
    },

    rake_test: {
      title: 'Test rake execution',
      description: 'Тестовая задача для проверки выполнения задач для rake',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake db:migrate:status"
    },

    cities_translate: {
      title: 'Translate cities',
      description: 'Забирает все переводы для городов из википедии',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake cities:translate"
    },

    cities_story_set_calculate: {
      title: 'Calculate storysets for cities',
      description: 'Наполняет индекс elasticsearch данными о наличии и количестве контента в стране и городе с учетом языка и ключа API',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake cities:story_set_calculate"
    },

    statistics_reindex: {
      title: 'Reindex statistics',
      description: 'Забирает статисику с гугла и кладет в идекс elasticsearch',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake statistics:reindex"
    },

    cities_update_museums: {
      title: 'Update museums for cities',
      description: 'Обновляет привязку музеев к городам - забирает из google данные о городе для тех музеев, у которых нет этих данных',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake cities:update:museums"
    },

    cities_update_tours: {
      title: 'Update tours for cities',
      description: 'Обновляет привязку туров к городам - забирает из google данные о городе для тех туров, у которых нет этих данных',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake cities:update:tours"
    },

    cities_locate: {
      title: 'Locate cities',
      description: 'По названию идет в google и получает location и bounds для города',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake cities:locate"
    },

    countries_locate: {
      title: 'Locate countries',
      description: 'По названию идет в google и получает location и bounds для страны',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake countries:locate"
    },

    cities_geocode_one: {
      title: 'Geocode one StorySet',
      description: 'Делает реверс геокодинг с обновление привязки для одного конкретного музея или тура по uuid.',
      cmd: "cd /home/deployer/apps/izi-cms/current && IZI_CONFIG=config/izi_config.yml RAILS_ENV=production bundle exec rake cities:geocode_one[{0}]",
      params: [
        {
          default: '',
          title: 'StorySet uuid'
        }
      ]
    }

  }

};
