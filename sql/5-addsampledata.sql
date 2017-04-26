
TRUNCATE TABLE dbo.Insights;
TRUNCATE TABLE dbo.ControlledSubstances;
TRUNCATE TABLE dbo.Registries;

INSERT INTO [dbo].[Insights]
           ([PatientId]
           ,[InsightId]
		   ,[InsightsText]
           ,[DateCreated]
)
     VALUES
           (1
		   ,1
           ,'High risk of opioid abuse'
           ,GETDATE())
GO


INSERT INTO [dbo].[Insights]
           ([PatientId]
           ,[InsightId]
		   ,[InsightsText]
           ,[DateCreated]
)
     VALUES
           (1
		   ,2
           ,'Used controlled substance in past 90 days'
           ,GETDATE())
GO


INSERT INTO [dbo].[Insights]([PatientId],[InsightId],[InsightsText],[DateCreated])
     VALUES (2,1,'Mammogram overdue',GETDATE())

INSERT INTO [dbo].[Insights]([PatientId],[InsightId],[InsightsText],[DateCreated])
     VALUES (3,1,'On Diabetes registry',GETDATE())

INSERT INTO [dbo].[Insights]([PatientId],[InsightId],[InsightsText],[DateCreated])
     VALUES (3,2,'Alcoholic',GETDATE())


--- controlled substances
INSERT INTO dbo.ControlledSubstances(PatientId,MedicationName, DatePrescribed, PrescribedByDoctor)
VALUES(1,'OxyContin', '3/1/2017', 'Dr. Bill Humphry');


INSERT INTO dbo.Registries(PatientId, RegistryName, DateAdded)
VALUES(1, 'Blue Cross Diabetes', '11/5/2016');

INSERT INTO dbo.Registries(PatientId, RegistryName, DateAdded)
VALUES(1, 'Hypertension', '5/13/2016');
