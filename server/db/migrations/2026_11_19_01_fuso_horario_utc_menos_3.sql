-- Os registros de estoque eram gravados com UTC_TIMESTAMP(). Converte-os uma
-- única vez para o horário local fixo UTC-03:00.
UPDATE estoque_movimentos
SET registrado_em = DATE_SUB(registrado_em, INTERVAL 3 HOUR);
