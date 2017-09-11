
TRUNCATE TABLE dbo.Patients;
TRUNCATE TABLE dbo.Insights;
TRUNCATE TABLE dbo.InsightItems;
TRUNCATE TABLE dbo.InsightLinks;
TRUNCATE TABLE dbo.ControlledSubstances;
TRUNCATE TABLE dbo.Registries;

INSERT INTO [dbo].[Patients]([PatientId],LastName,FirstName,MRN)
VALUES(1, 'Jones', 'James', 'AR472824' )
GO

INSERT INTO [dbo].[Patients]([PatientId],LastName,FirstName,MRN)
VALUES(2, 'Brown', 'Joe', 'JN4354363' )
GO

INSERT INTO [dbo].[Patients]([PatientId],LastName,FirstName,MRN)
VALUES(3, 'Kane', 'Liam', 'KN42233334' )
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
           (1,1,
           'Category'
           ,'High risk of opioid abuse'
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
           (1,1,1
           ,'Daily Opioid MME Threshold'
            , '<span class=emphasis>50</span> (^ 28% in past 6 months)'
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
           (1,1,2
           ,'% Days Uses Opioid Over 50 MME' 
            , '<span class=emphasis>25.54%</span> (22,845 days/ 89,446 days)'
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
           (1,1,3
           ,'% Patient Encounter Uses Opioid Over 50 MME' 
            , '<span class=emphasis>21.41%</span> (9,284/43,371)'
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
           (1,1,4
           ,'Risk Factors' 
            , '<ul><li>Family History of Addiction</li><li>Diagnosed Depression</li></ul>'
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
           (1,1,5
           ,'In Hospice Care?' 
            , 'Started May 1, 2016'
           ,'04-25-2017')
GO

INSERT INTO [dbo].[InsightLinks]
           ([PatientId]
            ,[InsightId]
            ,[InsightLinkId]
	      ,[LinkName]
	      ,[LinkUrl]
            ,[DateCreated]
)
     VALUES
           (1,1,1
           ,'Controlled Substance History' 
           , ''
           ,'04-25-2017')
GO


INSERT INTO [dbo].[Insights]
           ([PatientId]
            ,[InsightId]
            , InsightCategory
            , [InsightName]
	      ,[InsightText]
            ,[DateCreated]
)
     VALUES
           (1,2
           , 'Medication category'
           ,'Used controlled substance in past 90 days'
           , ''
           ,'04-25-2017')
GO

/* add insights for other patients */
INSERT INTO [dbo].[Insights]([PatientId],[InsightId], InsightCategory, [InsightName],[InsightText],[DateCreated])
     VALUES (2,1,'Test Category','Mammogram overdue','text',GETDATE())

INSERT INTO [dbo].[Insights]([PatientId],[InsightId], InsightCategory, [InsightName],[InsightText],[DateCreated])
     VALUES (3,1,'Registry Category','On Diabetes registry','text',GETDATE())

INSERT INTO [dbo].[Insights]([PatientId],[InsightId], InsightCategory, [InsightName],[InsightText],[DateCreated])
     VALUES (3,2, 'Risk Category','Alcoholic', 'text',GETDATE())


--- controlled substances
INSERT INTO dbo.ControlledSubstances(PatientId,ControlledSubstanceId, [MedicationCategory],MedicationName, DatePrescribed, PrescribedByDoctor)
VALUES(1,1,'Opiod','OxyContin', '3/1/2017', 'Dr. Bill Humphry');


INSERT INTO dbo.Registries(PatientId, RegistryName, DateAdded)
VALUES(1, 'Blue Cross Diabetes', '11/5/2016');

INSERT INTO dbo.Registries(PatientId, RegistryName, DateAdded)
VALUES(1, 'Hypertension', '5/13/2016');
