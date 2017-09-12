USE InsightsDatabase;
GO

DELETE FROM [dbo].[InsightItems]
WHERE PatientId = 2
GO


DELETE FROM [dbo].[Insights]
WHERE PatientId = 2
GO

INSERT INTO [dbo].[Insights]
           ([PatientId]
            ,[InsightId]
            ,InsightCategory
            , InsightName
	      ,[InsightText]
            ,[DateCreated]
)
     VALUES
           (2,4,
           'Category'
           ,'High risk of readmission'
           , ''
           ,'04-25-2017')
GO

INSERT INTO [dbo].[InsightItems]
           ([PatientId]
            ,[InsightId]
            ,[InsightItemId]
	      ,[ItemName]
	      ,[ItemText]
            ,[DateCreated]
)
     VALUES
           (2,4,1
           ,'LACE score'
            , '<span class=emphasis>12</span> (^ 28% in past 6 months)'
           ,'04-25-2017')
GO
