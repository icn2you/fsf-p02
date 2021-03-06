// model:generate --name PodcastUserData --attributes subscribed:boolean

'use strict';

module.exports = (sequelize, DataTypes) => {
  const PodcastUserData = sequelize.define('PodcastUserData', {
    subscribed: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    podcastId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  PodcastUserData.associate = function (models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Podcast);
  };

  return PodcastUserData;
};
